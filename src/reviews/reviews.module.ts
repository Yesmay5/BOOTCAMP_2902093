import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from './entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';


@Module({
  imports:[TypeOrmModule.forFeature([ Review  , Bootcamp])],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}