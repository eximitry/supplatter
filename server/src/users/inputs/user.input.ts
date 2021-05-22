import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field()
    readonly username: string;
}
