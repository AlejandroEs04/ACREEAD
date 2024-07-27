import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { Plan } from 'types'

const prisma = new PrismaClient()

export const getAll = async(req: Request, res: Response) => {
    try {
        const plans = await prisma.plan.findMany()

        return res.status(201).json({
            plans
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const createOne = async(req: Request, res: Response) => {
    const plan : Plan = req.body

    try {
        await prisma.plan.create({
            data: plan
        })

        return res.status(200).json({
            msg: "Successfully created plan"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const updateOne = async(req: Request, res: Response) => {
    const plan : Plan = req.body
    const id = +req.params.id

    try {
        await prisma.plan.update({
            data: plan, 
            where: {
                id
            }
        })

        return res.status(200).json({
            msg: "Successfully updated plan"
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
        await prisma.plan.delete({
            where: {
                id
            }
        })

        return res.status(200).json({
            msg: "Successfully deleted plan"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}