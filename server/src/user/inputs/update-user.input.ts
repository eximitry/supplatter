import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

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
