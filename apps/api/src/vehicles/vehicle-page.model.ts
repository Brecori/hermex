import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Vehicle } from "./vehicle.model";

@ObjectType()
export class VehiclePage {
  @Field(() => [Vehicle])
  items: Vehicle[];

  @Field(() => Int)
  totalCount: number;
}
