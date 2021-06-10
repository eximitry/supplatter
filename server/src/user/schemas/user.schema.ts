import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    // @Prop()
    // _id: MongooseSchema.Types.ObjectId;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    picture: string;

    @Prop()
    audio: string;

    // @Prop({type: [{type: MongooseSchema.Types.ObjectId, ref: 'Task'}]})
    // tasks: Task[];
}

export const UserSchema = SchemaFactory.createForClass(User);
