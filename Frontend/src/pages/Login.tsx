import { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom'
import InputContainer from '../components/InputContainer'

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: '', 
        password: ''
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setLoginForm({
            ...loginForm, 
            [name] : value
        })
    }
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:bg-white px-5 py-10 rounded-xl sm:shadow-xl">
            <div >
                <img className="mx-auto h-10 w-auto" src="../AcreeadIconBlack.svg" alt="Acreead Logo" />
                <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form className="space-y-6">
                    <InputContainer 
                        name='email'
                        type='email'
                        label='Email'
                        placeholder='Ej. correo@acreead.com'
                        value={loginForm.email}
                        handleChange={handleChange}
                    />

                    <InputContainer 
                        name='password'
                        type='password'
                        label='Password'
                        placeholder='Password'
                        handleChange={handleChange}
                        value={loginForm.password}
                        link='/auth/forgot-password'
                    />
                    <div>
                        <button type="submit" className="flex w-full transition-colors justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">Do you not have account? <Link to={`/auth/signup`} className="font-semibold leading-6 text-sky-600 hover:text-sky-700">Create account</Link></p>
                <p className="mt-1 text-center text-sm text-gray-500">Did you forgot your password? <Link to={`/auth/forgot-password`} className="font-semibold leading-6 text-sky-600 hover:text-sky-700">Forgot Password</Link></p>
            </div>
        </div>
    )
}

export default Login