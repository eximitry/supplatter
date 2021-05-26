import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
    @Field()
    readonly _id: string;

    @Field()
    readonly username: string;

    @Field()
    readonly email: string;

    @Field()
    readonly password: string;
}
