import { Column, Entity, ManyToMany, PrimaryGeneratedColumn , OneToMany, ManyToOne } from "typeorm"
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity"

enum minimumSkill {
    'Beginner',
    'Intermediate',
    'Advance'
}

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number 

    @Column({type:'varchar' , length:100, nullable: true })
    title: string;

    @Column({ type: 'tinyint', nullable: true, default:4})
    weeks: number;

    @Column({ type: 'decimal', nullable: true})
    tuition: number;

    @Column('varchar' , {length:30})
    description: string

    @Column({ name:'minimum_skill', type: 'enum' , enum:["Beginner", "Intermediate", "Advanced"],  })
    minimumSkill : minimumSkill

    @Column('date')
    createdAt: Date
    
    @ManyToOne(
        () => Bootcamp , (bootcamp ) => bootcamp.courses )
        bootcamp: Bootcamp

}

