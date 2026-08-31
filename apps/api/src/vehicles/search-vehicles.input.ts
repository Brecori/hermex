import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class SearchVehiclesInput {
  @Field(() => ID)
  pickupLocationId: string;

  @Field(() => ID)
  returnLocationId: string;

  @Field()
  pickupDate: string;

  @Field()
  returnDate: string;

  @Field(() => ID, { nullable: true })
  categoryId?: string;
}
