import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';  // Import OrderController

@Module({
  controllers: [OrderController],  // Register OrderController here
  providers: [OrderService],
})
export class OrderModule {}
