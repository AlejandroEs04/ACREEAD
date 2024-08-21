export type Service = {
    id: number, 
    name: string, 
    description: string, 
    plans: Plan[]
}

export type Plan_Service_Obj = {
    id: number
    plan_id: number
    service_id: number
    plan: Plan 
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

export type Link = {
    pathname: string
    name: string
    icon?: string
}

export type Header = {
    name: string
}

export type Column = {
    name: string
}

export type Columns = Column[]
export type Headers = Header[]