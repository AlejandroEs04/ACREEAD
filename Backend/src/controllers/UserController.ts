import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { User } from 'types'
import hashingPassword from '../utils/hashingPassword'

const prisma = new PrismaClient()

export const getAll = async(req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                last_name: true,
                email: true,
                phone_number: true,
                active: true,
                rol_id: true, 
                rol: true, 
                sales: {
                    select: {
                        plan_service: {
                            select: {
                                plan: true, 
                                service: true
                            }
                        }
                    }
                }, 
                suscriptions: {
                    select: {
                        plan_service: {
                            select: {
                                plan: true, 
                                service: true
                            }
                        }
                    }
                }
            }
        })

        return res.status(201).json({
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const createOne = async(req: Request, res: Response) => {
    const user : User = req.body;

    try {
        if(await prisma.user.findFirst({ where: { email: user.email } })) {
            return res.status(409).json({
                msg: "The email is already being used, by another account"
            })
        }
        
        if(await prisma.user.findFirst({ where: { phone_number: user.phone_number } })) {
            return res.status(409).json({
                msg: "The phone number is already being used, by another account"
            })
        }

        user.password = await hashingPassword(user.password)

        await prisma.user.create({
            data: user
        })

        return res.status(200).json({
            msg: "Account created successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}

export const updateOne = async(req: Request, res: Response) => {
    const user : User = req.body;
    const id = +req.params.id
    
    try {
        const userDB = await prisma.user.findFirst({ where: { id } })

        if(await prisma.user.findFirst({ where: { email: user.email } }) && user.email != userDB?.email) {
            return res.status(409).json({
                msg: "The email is already being used, by another account"
            })
        }
        
        if(await prisma.user.findFirst({ where: { phone_number: user.phone_number } }) && user.phone_number != userDB?.phone_number) {
            return res.status(409).json({
                msg: "The phone number is already being used, by another account"
            })
        }

        if(user.password) {
            user.password = await hashingPassword(user.password)
        } else {
            user.password = userDB?.password ?? ""
        }
        
        await prisma.user.update({
            where: {
                id
            }, 
            data: user
        })

        return res.status(200).json({
            msg: "Account updated successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Request failed, please try again later"
        })
    }
}