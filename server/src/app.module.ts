import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { UserModule } from './user/user.module';
import { FileModule } from './file/file.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, 'static'),
        }),
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@cluster0.o4j5p.mongodb.net/supplatter?retryWrites=true&w=majority',
        ),
        UserModule,
        FileModule,
    ],
})
export class AppModule {}
