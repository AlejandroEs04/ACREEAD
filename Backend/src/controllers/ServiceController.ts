import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { Service } from 'types'

const prisma = new PrismaClient()

export const getAll = async(req: Request, res: Response) => {
    try {
        const services = await prisma.service.findMany()

        return res.status(201).json({
            services
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const createOne = async(req: Request, res: Response) => {
    const service : Service = req.body

    try {
        await prisma.service.create({
            data: service
        })

        return res.status(201).json({
            msg: "Successfully created service"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const updateOne = async(req: Request, res: Response) => {
    const service : Service = req.body
    const id = +req.params.id

    try {
        await prisma.service.update({
            data: service, 
            where: {
                id
            }
        })

        return res.status(200).json({
            msg: "Successfully updated service"
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
        await prisma.service.delete({
            where: {
                id
            }
        })

        return res.status(200).json({
            msg: "Successfully deleted service"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}