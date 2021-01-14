import { Controller, Get, Post, HttpCode, Param, Body, Render } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    // return 'This action returns all cats.';
    return this.catsService.findAll();
  }

  @Get('/hogehoge')
  @HttpCode(404)
  notFound(): string {
    return 'There are No Cats In America.'
  }

  @Get('new')
  @Render('cats')
  new() {
    return { message: 'hogehoge' };
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // return 'This action adds a new cat.';
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
