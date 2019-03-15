import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

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
