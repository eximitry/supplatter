import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserInput } from './inputs/create-user.input';
import { ListUserInput } from './inputs/list-user.input';
import { UpdateUserInput } from './inputs/update-user.input';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private usersService: UserService) {}

    @Query(() => User)
    getById(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.getById(_id);
    }

    @Query(() => [CreateUserDto])
    getAll(@Args('filters', { nullable: true }) filters?: ListUserInput) {
        return this.usersService.getAll(filters);
    }

    @Mutation(() => CreateUserDto)
    create(@Args('input') input: CreateUserInput) {
        return this.usersService.create(input);
    }

    @Mutation(() => User)
    update(@Args('input') payload: UpdateUserInput) {
        return this.usersService.update(payload);
    }

    @Mutation(() => User)
    delete(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.delete(_id);
    }
}
