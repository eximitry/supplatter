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
export class ListUserInput {
    @Field(() => String, { nullable: true })
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    username?: string;
}

@InputType()
export class UpdateUserInput {
    @Field(() => String, { nullable: true })
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    readonly username?: string;

    @Field(() => String, { nullable: true })
    readonly email?: string;

    @Field(() => String, { nullable: true })
    readonly password?: string;
}
