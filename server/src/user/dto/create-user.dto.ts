import { Field, ObjectType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType()
export class CreateUserDto {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field()
    readonly username: string;

    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}
