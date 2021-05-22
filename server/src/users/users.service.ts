import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserInput } from './inputs/user.input';
import { Users, UsersDocument } from './users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
    ) {}

    async createUser(createCatDto: CreateUserInput): Promise<Users> {
        const createdCat = new this.usersModel(createCatDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Users[]> {
        return await this.usersModel.find().exec();
    }
}
