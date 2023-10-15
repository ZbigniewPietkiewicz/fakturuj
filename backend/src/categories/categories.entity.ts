import { ObjectType, Field } from '@nestjs/graphql';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Length, validateOrReject } from 'class-validator';
import { Product } from 'src/products/products.entity';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column({ length: 20 })
  @Length(1, 20)
  @Field()
  name: string;

  @Field(() => [Product], { nullable: true })
  @OneToMany(() => Product, (product: Product) => product.category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  products: Promise<Product[]>;

  @BeforeInsert()
  @BeforeUpdate()
  private validate(): Promise<void> {
    return validateOrReject(this).catch((errors) => {
      console.log(errors);
      throw errors;
    });
  }
}
