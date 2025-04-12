import { Router } from "express"
import UsersModel from "../dao/models/User.js"
import PetModel from "../dao/models/Pet.js"
import { generateMockPets } from "../utils/mockingPets.js"
import { generateMockUsers } from "../utils/mockingUsers.js"

const router = Router()


router.get("/mockingpets", (req, res) => {
    try {
        const pets = generateMockPets(100)
        res.status(200).json({ status: "success", payload: pets })
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message })
    }
})


router.get("/mockingusers", (req, res) => {
    try {
        const users = generateMockUsers(50)
        res.status(200).json({ status: "success", payload: users })
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message })
    }
})


router.post("/generateData", async (req, res) => {
    try {
        let { users = 0, pets = 0 } = req.body

        users = parseInt(users)
        pets = parseInt(pets)

        if (!Number.isInteger(users) || !Number.isInteger(pets) || users < 0 || pets < 0) {
            return res.status(400).json({
                status: "error",
                error: "Los usuarios y las mascotas deben ser numeros positivos!",
            })
        }

        if (users > 0) {
            const mockUsers = generateMockUsers(users)
            await UsersModel.insertMany(mockUsers)
        }

        if (pets > 0) {
            const mockPets = generateMockPets(pets)
            await PetModel.insertMany(mockPets)
        }

        res.status(201).json({
            status: "success",
            message: `${users} users y ${pets} pets Generados con exito!`,
        })
    } catch (error) {
        res.status(500).json({ status: "error", error: error.message })
    }
})

export default router
