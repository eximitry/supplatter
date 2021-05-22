import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./modules/user.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.o4j5p.mongodb.net/supplatter?retryWrites=true&w=majority'),
        UserModule
    ],
})
export class AppModule {
}
