import {
  Post,
  Body,
  Controller,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(@Res() response) {
    response.status(200).send('This action returns all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }
}
