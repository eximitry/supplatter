import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Task } from './task.shema';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    _doc: any;

    @Prop()
    _id: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    avatar: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Task' })
    tasks: Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);
