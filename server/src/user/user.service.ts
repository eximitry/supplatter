import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { FileService, FileType } from '../file/file.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private fileService: FileService,
    ) {}

    async create(dto: CreateUserDto, avatar): Promise<User> {
        const avatarPath = this.fileService.createFile(
            FileType.IMAGE,
            avatar,
        );

        return await this.userModel.create({
            ...dto,
            listens: 0,
            avatar: avatarPath,
        });
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
