import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all Items';
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return `Item ${id}`;
  }
}
