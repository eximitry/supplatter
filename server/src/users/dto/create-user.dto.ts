import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
    @Field()
    readonly username: string;
}
