import { fakerKO as faker } from '@faker-js/faker';

export function getFakeUser() {
    return {
        email: getRandomId(1, 10000) + faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password(),
        birth: faker.date.birthdate(),
        job: faker.person.jobTitle(),
    };
}

export function getRandomId(min: number, max: number) {
    return faker.number.int({ min, max });
}

export function getRandomAlpha() {
    return faker.string.alpha()
}

export function getRandomName() {
    return faker.person.fullName();
}