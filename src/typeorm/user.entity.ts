import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  password: string;
}
