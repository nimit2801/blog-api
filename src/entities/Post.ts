import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDate, IsString } from 'class-validator';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsString()
  content: string;

  @Column()
  @IsString()
  keywords: string;

  @Column()
  @IsDate()
  createDate: Date;
}
