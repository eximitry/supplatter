import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { User } from '../shemas/user.shema';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserInput, ListPersonInput } from '../inputs/user.input';
import { UserService } from '../services/user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private usersService: UserService) {}

    @Query(() => User)
    async user(
        @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
    ) {
        return this.usersService.getById(_id);
    }

    @Query(() => [CreateUserDto])
    async getUsers(
        @Args('filters', { nullable: true }) filters?: ListPersonInput,
    ) {
        return this.usersService.getUsers(filters);
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.usersService.createUser(input);
    }
}
