import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prize {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column({
    default: '',
  }) description: string;

  @Column({
    default: 0,
  })
  price: number;

  @Column() quantity: number;
}
