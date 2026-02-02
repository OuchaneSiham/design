import { useState } from 'react';
import Input from '../../component/ui/Input';
import PasswordInput from '../../component/ui/PasswordInput';
import SignIn from '../../component/ui/SignIn';

export default function LoginForm()
{
    const [username, setUsernameName] = useState('');
    const [password, setpassword] = useState('');
    
    const buttonStyleOff = 'w-full h-10 bg-[#4A3B2F] mt-4 border-0 rounded-lg text-black';
    const buttonStyleOn = 'w-full h-10 bg-[#D4A574] mt-4 border-0 rounded-lg text-black';

    
    const isFormValid =  username.trim() !== "" && password.trim() !== "";
    
    function changePassword(e)
    {
        // console.log();
        setpassword(e.target.value);
    }

    return(
        
        <div className='text-[#E5E5E5]'>
            <p className='text-[24px]
                text-white font-medium text-center mb-3'>
                Sign in to LEETPONG
            </p>
            
            <div className='grid gap-y-4  rounded-2xl border-1 border-[#2A2420] mt-5
                                max-w-md mx-3 px-4 py-4 py-5 '>
                <Input 
                    htmlFor="username"
                    text='username'
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e) => {setUsernameName(e.target.value)}}
                />
                <PasswordInput
                    htmlFor='password'
                    text='password'
                    id='password'
                    value={password}
                    onChange={(e) => {setpassword(e.target.value)}}
                />
                <button
                    disabled={!isFormValid}
                    onClick={() => {alert("hello")}} // Something to be implemented after
                    className={isFormValid ? buttonStyleOn : buttonStyleOff}>
                    sign in
                </button>
            </div >
        </div>
    );
}