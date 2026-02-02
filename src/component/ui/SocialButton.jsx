import GoogleIcone from '../../assets/images/googleicone.png';

export default function SocialButton() {
    function typelogin()
    {
        console.log("hell");
    }
    return(
   <div className="mx-3 mt-3 grid pb-4">
        <button
            onClick={typelogin}
            className="group bg-white h-11 px-6 border-1 border-[#2A2420] rounded-full">
            <div className="relative flex items-center space-x-4 justify-center">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="absolute left-0 w-5" alt="google logo" />
                <span
                    className="block w-max font-semibold tracking-wide text-black  text-sm ">Continue
                    with Google
                </span>
            </div>
        </button>
    </div>
    );
}

