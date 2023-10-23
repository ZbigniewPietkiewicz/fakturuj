import { ObjectType, Field } from '@nestjs/graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  Length,
  Min,
  IsNumber,
  IsInt,
  IsDateString,
  IsISO4217CurrencyCode,
  validateOrReject,
} from 'class-validator';
import { Category } from 'src/categories/categories.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ length: 100 })
  @Length(1, 100)
  @Field()
  name: string;

  @Column()
  @Min(0)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Field()
  price: number;

  @Column()
  @IsISO4217CurrencyCode()
  @Field()
  currencyCode: string;

  @Column()
  @Min(0)
  @IsInt()
  @Field()
  amount: number;

  @Column()
  @IsDateString()
  @Field()
  productionDate: string;

  @Field(() => Category)
  @ManyToOne(() => Category, (category: Category) => category.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'categoryId' })
  category: Promise<Category>;

  @Column()
  categoryId: number;

  @Column()
  @Field()
  description: string;

  @BeforeInsert()
  @BeforeUpdate()
  private validate(): Promise<void> {
    return validateOrReject(this).catch((errors) => {
      throw errors;
    });
  }
}
