import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    @UseInterceptors(
        FileFieldsInterceptor([
            { name: 'avatar', maxCount: 1 },
        ]),
    )
    create(@UploadedFiles() files, @Body() dto: CreateUserDto) {
        const { avatar } = files;
        return this.userService.create(dto, avatar[0]);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: MongooseSchema.Types.ObjectId) {
        return this.userService.getById(id);
    }

    // @Put(':id')
    // update(@Param('id') id: MongooseSchema.Types.ObjectId, @Body() dto: CreateUserDto) {
    //     return this.userService.update(dto);
    // }

    @Delete(':id')
    delete(@Param('id') id: MongooseSchema.Types.ObjectId) {
        return this.userService.delete(id);
    }
}
