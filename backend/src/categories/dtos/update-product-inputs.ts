import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryDTO {
  @Field()
  id: number;

  @Field()
  name: string;
}
