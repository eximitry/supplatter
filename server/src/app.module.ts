import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        UsersModule,
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@cluster0.o4j5p.mongodb.net/supplatter?retryWrites=true&w=majority',
        ),
        UserModule,
    ],
})
export class AppModule {}