import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class ListUserInput {
    @Field(() => String, { nullable: true })
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    username?: string;
}
