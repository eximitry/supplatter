import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { User, UserDocument } from '../shemas/user.shema';
import { CreateUserInput, ListPersonInput } from '../inputs/user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private usersModel: Model<UserDocument>,
    ) {}

    getById(_id: MongooseSchema.Types.ObjectId) {
        return this.usersModel.findById(_id).exec();
    }

    async getUsers(filters: ListPersonInput): Promise<User[]> {
        return await this.usersModel.find({ ...filters }).exec();
    }

    async createUser(createUserDto: CreateUserInput): Promise<User> {
        const createdUser = new this.usersModel(createUserDto);
        return await createdUser.save();
    }
}
