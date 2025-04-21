import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepo: Repository<Menu>,
  ) {}

  // Ambil semua menu
  findAll(): Promise<Menu[]> {
    return this.menuRepo.find();
  }

  // Ambil satu menu berdasarkan ID, jika tidak ditemukan lempar NotFoundException
  async findOne(id: number): Promise<Menu> {
    const menu = await this.menuRepo.findOneBy({ id });

    // Jika tidak ditemukan, lempar NotFoundException dengan pesan error
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${id} not found`);
    }

    return menu;
  }

  // Create menu baru
  create(data: Partial<Menu>): Promise<Menu> {
    const menu = this.menuRepo.create(data);
    return this.menuRepo.save(menu);
  }

  // Update menu berdasarkan ID dan data baru
  async update(id: number, data: Partial<Menu>): Promise<Menu> {
    const menu = await this.menuRepo.findOneBy({ id });

    // Pastikan menu ada sebelum update
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${id} not found`);
    }

    // Update menu
    await this.menuRepo.update(id, data);

    // Kembalikan menu yang sudah diperbarui
    const updatedMenu = await this.menuRepo.findOneBy({ id });

    if (!updatedMenu) {
      throw new NotFoundException(`Menu with ID ${id} not found after update`);
    }

    return updatedMenu;
  }

  // Hapus menu berdasarkan ID
  async remove(id: number): Promise<void> {
    const menu = await this.menuRepo.findOneBy({ id });

    // Jika tidak ada, lempar error
    if (!menu) {
      throw new NotFoundException(`Menu with ID ${id} not found`);
    }

    await this.menuRepo.delete(id);
  }
}
