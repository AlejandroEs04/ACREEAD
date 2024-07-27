import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { Plan_Service } from 'types'

const prisma = new PrismaClient()

export const getAll = async(req: Request, res: Response) => {
    try {
        const plan_services = await prisma.planService.findMany({
            include: {
                plan: true, 
                service: true
            }
        })

        return res.status(201).json({
            plan_services
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const createOne = async(req: Request, res: Response) => {
    const plan_services : Plan_Service[] = req.body

    try {
        await prisma.planService.createMany({
            data: plan_services
        })

        return res.status(200).json({
            msg: "Successfully assigned plan(s) to service(s)"
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
        await prisma.planService.delete({
            where: {
                id
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}