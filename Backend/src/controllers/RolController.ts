import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { Rol } from 'types'

const prisma = new PrismaClient()

export const getAll = async(req: Request, res: Response) => {
    try {
        const roles = await prisma.rol.findMany({
            include: {
                users: true
            }
        })

        return res.status(201).json({
            roles
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const createOne = async(req: Request, res: Response) => {
    const rol : Rol = req.body

    try {
        await prisma.rol.create({
            data: rol
        })

        return res.status(200).json({
            msg: "Successfully created rol"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const updateOne = async(req: Request, res: Response) => {
    const rol : Rol = req.body
    const id = +req.params.id

    try {
        await prisma.rol.update({
            data: rol,
            where: {
                id
            }
        })

        return res.status(200).json({
            msg: "Successfully updated rol"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const deleteOne = async(req: Request, res: Response) => {
    const id = +req.params.id

    try {
        await prisma.rol.delete({
            where: {
                id
            }
        })

        return res.status(200).json({
            msg: "Successfully deleted rol"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}