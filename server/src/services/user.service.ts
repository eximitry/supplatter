import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { User, UserDocument } from '../shemas/user.shema';
import { CreateUserInput, ListUserInput } from '../inputs/user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private usersModel: Model<UserDocument>,
    ) {}

    async getById(_id: MongooseSchema.Types.ObjectId) {
        return await this.usersModel.findById(_id).exec();
    }

    async getAll(filters: ListUserInput): Promise<User[]> {
        return await this.usersModel.find({ ...filters }).exec();
    }

    async create(createUserDto: CreateUserInput): Promise<User> {
        const createdUser = new this.usersModel(createUserDto);

        return await createdUser.save();
    }

    async update(payload) {
        return this.usersModel
            .findByIdAndUpdate(payload._id, payload, { new: true })
            .exec();
    }

    async delete(_id: MongooseSchema.Types.ObjectId): Promise<User> {
        return this.usersModel.findByIdAndDelete(_id).exec();
    }
}
