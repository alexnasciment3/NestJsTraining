import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { create } from 'domain';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findeOne(@Param() params) {
    return `Curso #${params.id}`;
  }

  //  -----------Parametro Desestruturado
  // @Get(':id')
  // findeOne(@Param('id) id:string) {
  //   return `Curso #${id}`;
  // }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do Curso #${id}`;
  }

  @Delete(':id')
  remove(@Param() params) {
    return `Exclusão Curso #${params.id}`;
  }
}
