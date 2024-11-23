import { Column, Entity, PrimaryGeneratedColumn , ManyToMany} from "typeorm"
import { Course } from "src/courses/entities/course.entity"


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number 

    @Column('varchar', {length : 20})
    name:string

    @Column('varchar' , {length : 20})
    email: string

    @Column('varchar' , {length:100 , default:"XXXX"})
    role: string

    @Column('varchar' , {length:100 , default:"XXXX"})
    password: string

    
}