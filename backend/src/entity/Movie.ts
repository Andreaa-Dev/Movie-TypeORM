import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  duration!: number;

  @Column()
  year!: number;

  @Column()
  rating!: number;

  @Column()
  review!: string;

  @ManyToMany(() => User)
  @JoinTable()
  users!: User[];
}
