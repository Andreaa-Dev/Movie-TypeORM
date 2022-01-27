import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from "typeorm";

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


  @ManyToMany
}
