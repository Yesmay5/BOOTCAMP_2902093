import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';


@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course) private courseRepository: Repository <Course>,
    @InjectRepository(Bootcamp) private bootcampRepository: Repository <Bootcamp>
  ) {}

 async create(payload: CreateCourseDto) {

        const { title , tuition , weeks, description , minimumSkill  , createdAt ,bootcampId } = payload     

        const bootcampById = await this.bootcampRepository.findOneBy({id : bootcampId})

         bootcampById

        const newCurso = new Course() 
        newCurso.title = title 
        newCurso.tuition = tuition 
        newCurso.weeks = weeks 
        newCurso.description = description 
        newCurso.minimumSkill = minimumSkill 
        newCurso.createdAt = createdAt 

        newCurso.bootcamp = bootcampById 

        return this.courseRepository.save(newCurso) 

   // const newCurso = this.courseRepository.create(payload)
   // return this.courseRepository.save(newCurso)
  }

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: number) {
    return this.courseRepository.findOneBy({id: id});
  }


  async update(id: number, payload: UpdateCourseDto) {
    const updCourses = await this.courseRepository.findOneBy({id}) ; 
  
    this.courseRepository.merge(updCourses , payload)

    return this.courseRepository.save(updCourses)
  }

  async remove(id: number) {
    const delCourse = await this.courseRepository.findOneBy({id});

    this.courseRepository.delete(delCourse)

    return delCourse 
  }
}