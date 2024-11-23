import { Injectable } from '@nestjs/common';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete , NotFoundException} from '@nestjs/common';

@Injectable()
export class BootcampsService {

  constructor(@InjectRepository(Bootcamp)
    private bootcampRepository:
      Repository<Bootcamp>  ){

    }

  create(body: CreateBootcampDto) {
    const newBootcamp = this.
                        bootcampRepository.
                        create(body);
    return  this.
            bootcampRepository.
            save(newBootcamp)
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  
findOne(@Param('id') id: number) {
  const bootcamp =
  this.bootcampRepository.findOneBy({id});
    if (!bootcamp) {
        throw new
        NotFoundException ( `No existe`)
    }
    return bootcamp 
  } 

  async update(id: number, body: UpdateBootcampDto) {
    const updBootcamp = await this.bootcampRepository.findOneBy({id}) ; 

    if ( !updBootcamp ) { 
      throw new NotFoundException (`No existe`)
    }
  
    this.bootcampRepository.merge(updBootcamp , body)

    return this.bootcampRepository.save(updBootcamp)
  }

  async remove(id: number) {
    const delBootcamp = await this.bootcampRepository.findOneBy({id});

    if ( !delBootcamp ) { 
      throw new NotFoundException (`No existe`)
    }

    this.bootcampRepository.delete(delBootcamp)

    return delBootcamp 
  }
}
