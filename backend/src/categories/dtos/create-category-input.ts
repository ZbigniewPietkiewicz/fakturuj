import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryDTO {
  @Field()
  name: string;
}
