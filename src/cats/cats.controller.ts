import { Controller, Get, HttpCode, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats.';
  }

  @Get('/hogehoge')
  @HttpCode(404)
  notFound(): string {
    return 'There are No Cats In America.'
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
