import bcrypt from "bcrypt"
import { faker } from "@faker-js/faker"

export const generateMockUsers = (count) => {
    const users = []
    const hashedPassword = bcrypt.hashSync("coder123", 10)

    for (let i = 0; i < count; i++) {
        users.push({
            _id: faker.database.mongodbObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            age: faker.number.int({ min: 18, max: 99 }),
            password: hashedPassword,
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: [],
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        })
    }

    return users
}
