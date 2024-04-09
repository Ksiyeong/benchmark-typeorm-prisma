import { Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { TypeormService } from './typeorm.service';

@Controller('typeorm')
export class TypeormController {
    constructor(private readonly typeormService: TypeormService) { }

    @Post()
    async postUser() {
        return await this.typeormService.createUser();
    }

    @Get()
    async getUser() {
        return await this.typeormService.findUser();
    }

    @Get('findAll')
    async getUsers() {
        return await this.typeormService.findUsers();
    }

    @Patch()
    async patchUser(@Query() query) {
        const min = Number(query.min);
        const max = Number(query.max);
        return await this.typeormService.updateUser(min, max);
    }

    private id = 1;
    @Delete()
    async deleteUser() {
        await this.typeormService.deleteUser(this.id++);
    }

    @Post('benchmark')
    async postUserBenchmark() {
        console.time('Create User - TypeORM');
        for (let i = 0; i < 5000; i++) {
            await this.typeormService.createUser();
        }
        console.timeEnd('Create User - TypeORM');
    }

    @Get('benchmark')
    async getUserBenchmark() {
        console.time('Find User - TypeORM');
        for (let i = 0; i < 5000; i++) {
            await this.typeormService.findUser();
        }
        console.timeEnd('Find User - TypeORM');
    }

    @Get('findAll/benchmark')
    async getUsersBenchmark() {
        console.time('Find Users - TypeORM');
        for (let i = 0; i < 5000; i++) {
            await this.typeormService.findUsers();
        }
        console.timeEnd('Find Users - TypeORM');
    }

    @Patch('benchmark')
    async patchUserBenchmark() {
        console.time('Update User - TypeORM');
        for (let i = 0; i < 5000; i++) {
            await this.typeormService.updateUser(1, 5000);
        }
        console.timeEnd('Update User - TypeORM');
    }

    @Delete('benchmark')
    async deleteUserBenchmark() {
        console.time('Delete User - TypeORM');
        for (let i = 1; i <= 5000; i++) {
            await this.typeormService.deleteUser(i);
        }
        console.timeEnd('Delete User - TypeORM');
    }
}
