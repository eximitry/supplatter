import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateUserInput {
    @Field(() => String)
    readonly username: string;

    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}

@InputType()
export class ListPersonInput {
    @Field(() => String, { nullable: true })
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    username?: string;
}
