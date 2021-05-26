import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from '../shemas/user.shema';
import { CreateUserDto } from '../dto/create-user.dto';
import { CreateUserInput } from '../inputs/user.input';
import { UserService } from '../services/user.service';

@Resolver()
export class UserResolver {
    constructor(private usersService: UserService) {}

    @Query(() => [CreateUserDto])
    async getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Mutation(() => CreateUserDto)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.usersService.createUser(input);
    }
}
