import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prize {
  @PrimaryGeneratedColumn() id: number;

  @Column() title: string;

  @Column() description: string;

  @Column() price: number;

  @Column() quantity: number;
}
