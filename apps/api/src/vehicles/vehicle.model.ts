import { Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Category } from "../categories/category.model";
import { Transmission } from "./transmission.enum";

@ObjectType()
export class Vehicle {
  @Field(() => ID)
  id: string;

  @Field()
  brand: string;

  @Field()
  model: string;

  @Field(() => Number)
  year: number;

  @Field()
  licensePlate: string;

  @Field(() => Float)
  dailyRate: number;

  @Field()
  available: boolean;

  @Field({ nullable: true })
  imageUrl?: string | null;

  @Field(() => Transmission)
  transmission: Transmission;

  @Field(() => ID)
  categoryId: string;

  @Field(() => Category)
  category: Category;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
