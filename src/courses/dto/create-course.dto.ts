import { IsNotEmpty , IsAlpha , IsDate, IsInt , IsPositive, Min, Max, IsIn, IsEnum, IsDecimal, IsNumber, min , Matches} from "class-validator"
import { ManyToMany } from "typeorm";

enum minimumSkill {
    'Beginner' = 0, 
    'Intermediate' = 1,
    'Advance' = 2
}

export class CreateCourseDto {
    

    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsInt()
    @IsIn ([4 , 8])
    readonly weeks: number;

    @IsNotEmpty({ message: "El valor debe estar presente" })
    @IsDecimal({ decimal_digits: "1,2" }, { message: "Debe ser un número decimal válido" })
    readonly tuition: number;  

    @IsNotEmpty()
    readonly description: string;

    @IsEnum (minimumSkill)
    readonly minimumSkill : minimumSkill;

    @IsNotEmpty()      
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: "CreateAt debe ser una fecha válida en formato YYYY-MM-DD" })
    readonly createdAt: Date; 


    @IsInt()
    readonly bootcampId: number

}