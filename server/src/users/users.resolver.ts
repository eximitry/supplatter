import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserInput } from './inputs/user.input';
import { Users } from './users.schema';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query(() => String)
    async hello(): Promise<string> {
        return 'hello';
    }

    @Query(() => [CreateUserDto])
    async users(): Promise<Users[]> {
        return this.usersService.findAll();
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.usersService.createUser(input);
    }
}
