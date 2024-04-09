import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ILike, Repository } from 'typeorm';
import { getFakeUser, getRandomId, getRandomAlpha, getRandomName } from 'src/faker';

@Injectable()
export class TypeormService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async createUser() {
        return await this.userRepository.save(getFakeUser());
    }

    async findUser() {
        return await this.userRepository.findOneBy({ id: getRandomId(1, 5000) });
    }

    async findUsers() {
        return await this.userRepository.find({
            where: {
                job: ILike(`%${getRandomAlpha()}%`)
            },
            take: 10,
            skip: 0
        });
    }

    async updateUser(min: number, max: number) {
        const id = getRandomId(min, max);
        await this.userRepository.update(
            { id },
            { name: getRandomName() }
        );
        return { id };
    }

    async deleteUser(id: number) {
        await this.userRepository.delete({ id });
    }
}
