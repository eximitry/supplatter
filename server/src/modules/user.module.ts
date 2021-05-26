import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { User, UserSchema } from '../shemas/user.shema';
import { UserResolver } from '../resolvers/user.resolver';
import { UserService } from '../services/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    providers: [UserResolver, UserService],
})
export class UserModule {}
