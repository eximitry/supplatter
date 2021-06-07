import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
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
