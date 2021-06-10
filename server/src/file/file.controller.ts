import {
    Controller, Get, Param,
    Post, Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FileController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }

    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './files' });
    }
}
