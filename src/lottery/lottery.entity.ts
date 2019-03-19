import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lottery {
  @PrimaryGeneratedColumn() id: number;
  @Column() title: string;
  @Column() desc: string;
  @Column() sponsor: string;
  @Column(
    { default: './assets/images/default-prize@3x.png' },
  ) banner: string;
  @Column() openType: number;
  @Column(
    { default: '' },
  ) openDate: string;
  @Column() openNumber: string;
  @Column() status: number;
  @Column() prizes: string;
}
