import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDTO {
  @Field()
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  amount: number;

  @Field({ nullable: true })
  currencyCode: string;

  @Field({ nullable: true })
  productionDate: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  categoryId: number;
}
