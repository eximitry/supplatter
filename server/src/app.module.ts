import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { UserModule } from './user/user.module';
// import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
    imports: [
        // ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@cluster0.o4j5p.mongodb.net/supplatter?retryWrites=true&w=majority',
        ),
        UserModule,
    ],
})
export class AppModule {}
