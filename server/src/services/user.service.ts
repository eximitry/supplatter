import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from '../shemas/user.shema';
import { CreateUserInput } from '../inputs/user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private usersModel: Model<UserDocument>,
    ) {}

    // async getUsers(): Promise<User[]> {
    //     return await this.usersModel.find().exec();
    // }

    async getUsers(): Promise<User[]> {
        return await this.usersModel.find()
            .then(users => {
                return users.map(user => {
                    return { ...user._doc, _id: user._doc._id.toString() };
                })
            })
            .catch(err => {
                    throw err
                }
            );
    }

    async createUser(createUserDto: CreateUserInput): Promise<User> {
        const createdUser = new this.usersModel(createUserDto);
        return await createdUser.save();
    }
}
