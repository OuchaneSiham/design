import Logo from '../../component/ui/Logo';
import LoginForm from './LoginForm';
import RedirectionLine from '../../component/ui/RedirectionLine';
import SocialButton from '../../component/ui/SocialButton';
import PrivacyPolicy from '../../component/ui/PrivacyPolicy';


export default function Login(){


    return(
        <div className='min-h-screen bg-[#111115] flex
                        justify-center items-center ' >
            <div className=' 
                            max-w-md w-full
                            bg-[#18181C]/100 space-y-9 px-4
                            rounded-4xl border-1 border-[#3D3229] '>
                <Logo/>
                <LoginForm/>
                <RedirectionLine text="new Here ?" link="/signup" linkText="create new account"/>
                <SocialButton/>
                <PrivacyPolicy/>
            </div>
        </div>
    );

}