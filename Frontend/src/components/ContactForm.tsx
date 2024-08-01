import { useState, ChangeEvent } from "react"
import { Contact_Form } from "../types"
import InputContainer from "./InputContainer"
import TextareaContainer from "./TextareaContainer"
import SelectContainer from "./SelectContainer"
import { services } from "../data"


const ContactForm = () => {
    const [contactForm, setContactForm] = useState<Contact_Form>({
        name: '', 
        last_name: '', 
        email: '', 
        phone_number: '', 
        message: '', 
        service_id: 0
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target

        setContactForm({
            ...contactForm, 
            [name] : value
        })
    }

    return (
        <div className="bg-white rounded grid grid-cols-1 md:grid-cols-2 gap-5 mt-3">
            <form action="" className="p-4">
                <h4 className="font-bold text-2xl">Send Email</h4>
                <p className="text-sm">Please fill the form with informations thats we are requesting</p>

                <InputContainer name="name" label="Name" placeholder="Name" value={contactForm.name} handleChange={handleChange} />
                <InputContainer name="last_name" label="Last Name" placeholder="Last Name" value={contactForm.last_name} handleChange={handleChange} />
                <InputContainer type="email" name="email" label="Email" placeholder="Ej. correo@acreead.com" value={contactForm.email} handleChange={handleChange} />
                <InputContainer type="number" name="phone_number" label="Phone Number" placeholder="Ej. 8110368975" value={contactForm.phone_number} handleChange={handleChange} />
                <TextareaContainer name="message" label="Message" value={contactForm.message} handleChange={handleChange} />
                <SelectContainer name="service_id" label="Servicio de interes" options={services} handleChange={handleChange} />

                <button type="submit" className="bg-sky-600 px-2 py-1 rounded w-full mt-2 text-white hover:bg-sky-700 transition-colors">Enviar</button>
            </form>

            <div className="bg-neutral-700 rounded-b md:rounded-b-none md:rounded-r p-4 text-white text-center">
                <h4 className="text-2xl font-semibold capitalize">Other contact methods</h4>
                
                <div>
                    
                </div>

                <p className="font-light">Thank you for contact us, we gonna answer more quickly possible</p>
            </div>
        </div>
    )
}

export default ContactForm