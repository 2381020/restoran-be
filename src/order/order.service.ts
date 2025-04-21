import { AppDataSource } from '../config/data-source';
import { Order } from './order.entity';

const orderRepo = AppDataSource.getRepository(Order);

export class OrderService {
  findAll() {
      throw new Error('Method not implemented.');
  }
  findOne(id: string) {
      throw new Error('Method not implemented.');
  }
  async getAll() {
    return orderRepo.find();
  }

  async create(orderData: Partial<Order>) {
    const newOrder = orderRepo.create(orderData);
    return orderRepo.save(newOrder);
  }

  async update(id: number, data: Partial<Order>) {
    await orderRepo.update(id, data);
    return orderRepo.findOneBy({ id });
  }

  async delete(id: number) {
    return orderRepo.delete(id);
  }
}
