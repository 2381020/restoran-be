import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  menuId: number;

  @Column()
  quantity: number;
}
