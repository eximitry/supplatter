import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Task } from '../../task/schemas/task.schema';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop()
    username: string;

    @Field()
    @Prop()
    email: string;

    @Field()
    @Prop()
    password: string;

    @Field()
    @Prop()
    avatar: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Task' })
    tasks: Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);
