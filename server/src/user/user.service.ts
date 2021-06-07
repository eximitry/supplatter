import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async create(dto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(dto);
        return createdUser.save();
    }

    async getAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async getById(id: MongooseSchema.Types.ObjectId): Promise<User> {
        return await this.userModel.findById(id).exec();
    }

    // async update(payload) {
    //     return await this.userModel.findByIdAndUpdate(payload);
    // }

    async delete(
        id: MongooseSchema.Types.ObjectId,
    ): Promise<MongooseSchema.Types.ObjectId> {
        const user = await this.userModel.findByIdAndDelete(id).exec();
        return user._id;
    }
}
