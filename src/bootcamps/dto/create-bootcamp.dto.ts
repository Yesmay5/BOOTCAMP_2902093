import { IsNotEmpty , IsAlpha , IsDate, IsInt , IsPositive, Min, Max , IsString , Matches} from "class-validator"

export class CreateBootcampDto {


    @IsNotEmpty({message:"Nombre no debe estar vacio"})
    readonly name: string;

    @IsNotEmpty({ message: "Teléfono no debe estar vacío" })
    @IsString({ message: "Teléfono debe ser una cadena de texto" })
    @Matches(/^[+]?(\d{1,3})?[\s\-]?\(?(\d{1,4})\)?[\s\-]?(\d{1,4})[\s\-]?(\d{1,4})$/, { message: "Teléfono no tiene un formato válido" })
    readonly phone: string;

    readonly address: string;

    readonly topics: string;

    @IsNotEmpty({message:"averageRating no debe estar vacio"})
    @IsPositive()
    @Min(1)
    @Max(3)   
    readonly averageRating: number;

    @IsNotEmpty({message:"CreateAT debe ser correcto"})
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: "CreateAt debe ser una fecha válida en formato YYYY-MM-DD" })
    readonly createAt: Date;

    
}
