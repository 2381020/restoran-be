import { AppDataSource } from '../config/data-source';
import { Cart } from './cart.entity';

const cartRepo = AppDataSource.getRepository(Cart);

export class CartService {
  findAll() {
      throw new Error('Method not implemented.');
  }
  async getAll() {
    return cartRepo.find();
  }

  async create(cartData: Partial<Cart>) {
    const newCart = cartRepo.create(cartData);
    return cartRepo.save(newCart);
  }

  async delete(id: number) {
    return cartRepo.delete(id);
  }
}
