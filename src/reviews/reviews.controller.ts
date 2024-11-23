import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('Reviews')
export class ReviewsController {
  constructor(private readonly ReviewsService: ReviewsService) {}

  @Post()
  create(@Body() payload: any) {
    //paylod:Sinonimo del body de la request
    //         Create, Update
    return  this.
    ReviewsService.
            create(payload);

  }  

  @Get()
  findAll() {
    return this.ReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload:any) {
    return this.ReviewsService.update(+id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ReviewsService.remove(+id);
  }
}
