import { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import InputContainer from '../components/InputContainer'
import AlertContainer from '../components/AlertContainer'
import { useAuth } from '../hooks/useAuth'

const SignUp = () => {
    const [signupForm, setSignupForm] = useState({
        name: '', 
        last_name: '', 
        email: '', 
        password: '', 
        repeat_password: ''
    })

    const {  } = useAuth();

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setSignupForm({
            ...signupForm, 
            [name] : value
        })
    }

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="../AcreeadIconBlack.svg" alt="Acreead Logo" />
                <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a new account</h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <AlertContainer 
                    type={2}
                    msg='Hubo un error'
                />

                <form className="space-y-6">
                    <InputContainer name='name' label='Your Name' placeholder='Name' value={signupForm.name} handleChange={handleChange} />
                    <InputContainer name='last_name' label='Your Last Name' placeholder='Last Name' value={signupForm.last_name} handleChange={handleChange} />

                    <InputContainer 
                        name='email'
                        type='email'
                        label='Email'
                        placeholder='Ej. correo@acreead.com'
                        value={signupForm.email}
                        handleChange={handleChange}
                    />

                    <InputContainer 
                        name='password'
                        type='password'
                        label='Password'
                        placeholder='Password'
                        handleChange={handleChange}
                        value={signupForm.password}
                    />

                    <InputContainer 
                        name='repeat_password'
                        type='password'
                        label='Repeat Password'
                        placeholder='Repeat Password'
                        handleChange={handleChange}
                        value={signupForm.repeat_password}
                    />

                    <div>
                        <button type="submit" className="flex w-full transition-colors justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">Do you have account? <Link to={`/auth/login`} className="font-semibold leading-6 text-sky-600 hover:text-sky-700">Login</Link></p>
                <p className="mt-1 text-center text-sm text-gray-500">Did you forgot your password? <Link to={`/auth/forgot-password`} className="font-semibold leading-6 text-sky-600 hover:text-sky-700">Forgot Password</Link></p>
            </div>
        </>
    )
}

export default SignUp