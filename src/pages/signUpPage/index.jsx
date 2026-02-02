import SocialButton from '../../component/ui/SocialButton';
import Input from '../../component/ui/Input';
import PasswordInput from '../../component/ui/PasswordInput';
import Logo from '../../component/ui/Logo';
import OrDevider from '../../component/ui/OrDevider';
import RedirectionLine from '../../component/ui/RedirectionLine';
import PrivacyPolicy from '../../component/ui/PrivacyPolicy';
import TermsOfService from '../../component/ui/TermsOfService';
import { useState } from 'react';


export default function SignUp()
{
    const [username, setUsernameName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [checkTerms, setUserTerms] = useState(false);

    const buttonStyleOff = 'w-full h-10 bg-[#4A3B2F] mt-4 border-0 rounded-lg text-black';
    const buttonStyleOn = 'w-full h-10 bg-[#D4A574] mt-4 border-0 rounded-lg text-black';
    const isFormValid =  username.trim() !== "" && email.trim() !== "" && password.trim() !== "" && checkTerms;

    return(
        <>
            <div className='min-h-screen bg-[#111115] flex justify-center items-center ' >
                <div className="max-w-md w-full bg-[#18181C]/100 space-y-9 px-4 py-2 rounded-4xl border-1 border-[#3D3229]">
                    <Logo/>
                    <div className='text-[#E5E5E5]'>
                        <p className='text-[24px] text-white font-medium text-center mb-3'>
                            Sign Up to LEETPONG
                        </p>

                        <div className='flex flex-col gap-y-4 mt-5 py-5  rounded-2xl border-1 border-[#2A2420]
                                max-w-md mx-3 px-6 py-0 '>
                            <Input 
                                htmlFor="username"
                                text='username'
                                id='username'
                                type='text'
                                value={username}
                                onChange={(e) => {setUsernameName(e.target.value)}}
                            />
                            <Input 
                                htmlFor="email"
                                text="Email address"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => {setemail(e.target.value)}}
                            />
                            <PasswordInput
                                htmlFor='password'
                                text='password'
                                id='password'
                                value={password}
                                onChange={(e) => {setpassword(e.target.value)}}/>
                            <button 
                                disabled={!isFormValid}
                                onClick={() => {alert("hello")}}
                                className={isFormValid ? buttonStyleOn : buttonStyleOff}>
                                    sign Up
                            </button>
                        </div>
                        <OrDevider/>
                        <SocialButton />
                        <RedirectionLine text="already have an account ?" link="/login" linkText="Login"/>
                        <TermsOfService
                            onChange={() => {setUserTerms(true)}}
                            checked={checkTerms}
                        />
                        <PrivacyPolicy/>
                    </div>
                </div>
            </div>
        </>
    );
}