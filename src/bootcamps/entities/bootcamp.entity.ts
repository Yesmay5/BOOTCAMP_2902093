import { Course } from "src/courses/entities/course.entity"
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn  } from "typeorm"
import { User } from "src/users/entities/user.entity"
import { Review } from "src/reviews/entities/review.entity"
import { IsNotEmpty } from "class-validator"

@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number 

    @Column('varchar', {length : 20})
    @IsNotEmpty() 
    phone:string

    @Column('varchar' , {length : 20})
    name: string

    @Column('varchar' , {length:100 , default:"XXXX"})
    address: string

    @Column('text')
    topics: string

    @Column( {name: 'average_rating'} )
    averageRating: number

    @Column( {type: 'timestamp' , name: 'created_at' , default: () => 'CURRENT_TIMESTAMP'} )
    createdAt: Date

    @OneToMany(
        () => Course , (course ) => course.bootcamp )
    courses: Course[]

    @OneToMany(
        () => Review , (Review ) => Review.bootcamp )
        Reviews: Review[]

}