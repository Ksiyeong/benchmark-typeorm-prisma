import { Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('prisma')
export class PrismaController {
    constructor(private readonly prismaService: PrismaService) { }

    @Post()
    async postUser() {
        return await this.prismaService.createUser();
    }

    @Get()
    async getUser() {
        return await this.prismaService.findUser();
    }

    @Get('findAll')
    async getUsers() {
        return await this.prismaService.findUsers();
    }

    @Patch()
    async patchUser(@Query() query) {
        const min = Number(query.min);
        const max = Number(query.max);
        return await this.prismaService.updateUser(min, max);
    }

    private id = 1;
    @Delete()
    async deleteUser() {
        await this.prismaService.deleteUser(this.id++);
    }

    @Post('benchmark')
    async postUserBenchmark() {
        console.time('Create User - Prisma');
        for (let i = 0; i < 5000; i++) {
            await this.prismaService.createUser();
        }
        console.timeEnd('Create User - Prisma');
    }

    @Get('benchmark')
    async getUserBenchmark() {
        console.time('Find User - Prisma');
        for (let i = 0; i < 5000; i++) {
            await this.prismaService.findUser();
        }
        console.timeEnd('Find User - Prisma');
    }

    @Get('findAll/benchmark')
    async getUsersBenchmark() {
        console.time('Find Users - Prisma');
        for (let i = 0; i < 5000; i++) {
            await this.prismaService.findUsers();
        }
        console.timeEnd('Find Users - Prisma');
    }

    @Patch('benchmark')
    async patchUserBenchmark() {
        console.time('Update User - Prisma');
        for (let i = 0; i < 5000; i++) {
            await this.prismaService.updateUser(1, 5000);
        }
        console.timeEnd('Update User - Prisma');
    }

    @Delete('benchmark')
    async deleteUserBenchmark() {
        console.time('Delete User - Prisma');
        for (let i = 1; i <= 5000; i++) {
            await this.prismaService.deleteUser(i);
        }
        console.timeEnd('Delete User - Prisma');
    }
}
