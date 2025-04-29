import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './create-menu-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(AuthGuard('jwt')) // Lindungi hanya endpoint POST
  @Post()
  async createMenu(
    @Body() createMenuDto: CreateMenuDto,
    @Req() req
  ) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  async getAllMenus(): Promise<any[]> {
    return this.menuService.findAll();
  }
}
