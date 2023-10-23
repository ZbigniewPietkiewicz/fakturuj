import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductDTO {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  amount: number;

  @Field()
  currencyCode: string = 'PLN';

  @Field()
  productionDate: string;

  @Field()
  description: string;

  @Field()
  categoryId: number;
}
