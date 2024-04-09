import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { getFakeUser, getRandomId, getRandomAlpha, getRandomName } from 'src/faker';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async createUser() {
        return await this.user.create({
            data: getFakeUser()
        });
    }

    async findUser() {
        return await this.user.findUnique({
            where: { id: getRandomId(1, 5000) }
        });
    }

    async findUsers() {
        return await this.user.findMany({
            where: {
                job: { contains: getRandomAlpha() }
            },
            take: 10,
            skip: 0
        })
    }

    async updateUser(min: number, max: number) {
        return await this.user.update({
            select: { id: true },
            where: { id: getRandomId(min, max) },
            data: { name: getRandomName() }
        });
    }

    async deleteUser(id: number) {
        await this.user.delete({
            where: { id }
        });
    }
}