import { Controller, Get } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller('/users')
export class UserController {
    constructor(private userService: UserService) {
    }

    create() {
    }

    @Get()
    async getAll() {
        return 'get all';
    }

    getOve() {
    }

    delete() {
    }
}
