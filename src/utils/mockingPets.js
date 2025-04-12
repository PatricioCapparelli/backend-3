import { faker } from "@faker-js/faker"

export const generateMockPets = (count) => {
    const pets = []

    for (let i = 0; i < count; i++) {
        pets.push({
            _id: faker.database.mongodbObjectId(),
            name: faker.animal.type(),
            species: faker.helpers.arrayElement(["dog", "cat", "bird", "fish", "rabbit"]),
            age: faker.number.int({ min: 1, max: 15 }),
            owner: null, 
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
        })
    }

    return pets
}
