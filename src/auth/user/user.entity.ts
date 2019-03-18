import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: string;

  @Column()
  password: string;

  @Column({ default: '' })
  nikeName: string;

  @Column({ default: '' })
  avatarUrl: string;

  @Column({
    default: 'regular',
  })
  role: string;
}
