import { IsNotEmpty , IsInt } from "class-validator"

export class CreateReviewDto {
    @IsNotEmpty()
    readonly title:string;

    @IsNotEmpty()
    readonly comment: string;

    @IsNotEmpty()
    readonly rating: number;

    @IsInt()
    readonly bootcampId: number
}
