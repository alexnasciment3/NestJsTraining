import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findeOne(@Param() params) {
    return this.coursesService.findOne(params.id);
  }

  //  -----------Parametro Desestruturado
  // @Get(':id')
  // findeOne(@Param('id) id:string) {
  //   return `Curso #${id}`;
  // }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.coursesService.remove(params.id);
  }
}
