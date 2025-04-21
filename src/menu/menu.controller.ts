import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './menu.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  @ApiOperation({ summary: 'Get all menu items' })
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a menu item by ID' })
  findOne(@Param('id') id: number): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create new menu item' })
  create(@Body() data: Partial<Menu>): Promise<Menu> {
    return this.menuService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a menu item' })
  update(@Param('id') id: number, @Body() data: Partial<Menu>): Promise<Menu> {
    return this.menuService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a menu item' })
  remove(@Param('id') id: number): Promise<void> {
    return this.menuService.remove(id);
  }
}
