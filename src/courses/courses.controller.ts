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
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param() params) {
    return this.coursesService.remove(params.id);
  }
}
