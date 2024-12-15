import {useEffect} from "react";

const Login = () => {
    useEffect(() => {
        document.body.classList.add('bg-login');
    }, [])

    return (<>
        <div className={"flex justify-center items-center h-[100vh]"}>
            <div className="login bg-white w-[328px] h-[603px] rounded-[20px]">

            </div>
        </div>
    </>)
}

export default Login;