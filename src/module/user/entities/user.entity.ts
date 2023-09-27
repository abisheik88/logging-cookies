import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  f_name: string;

  @Column()
  l_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;
}
