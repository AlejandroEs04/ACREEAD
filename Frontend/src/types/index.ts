export type Service = {
    id: number, 
    name: string, 
    description: string, 
    plans : Plan[]
}

export type Plan = {
    id: number, 
    name: string, 
    description: string, 
    price: number, 
    icon_url: string, 
    active: boolean, 
    duration: number
}

export type Plan_Service = {
    service_id: number, 
    plan_id: number
}

export type Rol = {
    id: number, 
    name: string, 
    description: string
}

export type User = {
    id: number, 
    name: string, 
    last_name: string, 
    email: string, 
    phone_number: string, 
    password: string, 
    active: boolean, 
    rol_id: number
}

export type UserAuth     = {
    id: number, 
    name: string, 
    last_name: string, 
    email: string, 
    phone_number: string, 
    active: boolean, 
    rol_id: number
}

export type Contact_Form = {
    name: string, 
    last_name: string, 
    email: string, 
    service_id: number, 
    message: string, 
    phone_number: string
}

export type Signup_Form = {
    name: string, 
    last_name: string, 
    email: string, 
    password: string, 
    repeat_password: string
}

export type Alert = {
    msg: string
    type: number
}