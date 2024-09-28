import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiBody,
  ApiResponse,
} from '@nestjs/swagger';
import { CocosService } from './cocos.service';
import { CreateCocosDto } from './dto/create-cocos.dto';
import { UpdateCocosDto } from './dto/update-cocos.dto';

@ApiTags('cocos')
@Controller('cocos')
export class CocosController {
  constructor(private readonly cocosService: CocosService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новую запись' })
  @ApiBody({ type: CreateCocosDto })
  @ApiResponse({ status: 201, description: 'Запись успешно создана.' })
  @ApiResponse({ status: 400, description: 'Неверные данные.' })
  create(@Body() createCocosDto: CreateCocosDto) {
    return this.cocosService.create(createCocosDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить все записи с пагинацией и фильтрацией' })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Номер страницы',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Количество записей на странице',
    example: 10,
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Поиск по названию',
    example: 'example',
  })
  @ApiResponse({ status: 200, description: 'Список записей.' })
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
  ) {
    return this.cocosService.findAll({ page, limit, search });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить запись по ID' })
  @ApiParam({ name: 'id', description: 'ID записи' })
  @ApiResponse({ status: 200, description: 'Запись найдена.' })
  @ApiResponse({ status: 404, description: 'Запись не найдена.' })
  findOne(@Param('id') id: string) {
    return this.cocosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить запись по ID' })
  @ApiParam({ name: 'id', description: 'ID записи' })
  @ApiBody({ type: UpdateCocosDto })
  @ApiResponse({ status: 200, description: 'Запись успешно обновлена.' })
  @ApiResponse({ status: 404, description: 'Запись не найдена.' })
  update(@Param('id') id: string, @Body() updateCocosDto: UpdateCocosDto) {
    return this.cocosService.update(id, updateCocosDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить запись по ID (мягкое удаление)' })
  @ApiParam({ name: 'id', description: 'ID записи' })
  @ApiResponse({ status: 200, description: 'Запись успешно удалена.' })
  @ApiResponse({ status: 404, description: 'Запись не найдена.' })
  remove(@Param('id') id: string) {
    return this.cocosService.remove(id);
  }
}
