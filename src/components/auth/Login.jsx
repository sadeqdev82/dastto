import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Login = () => {
    useEffect(() => {
        document.body.classList.add('bg-login');
    }, [])

    return (<>
        <div className={"flex justify-center items-center"}>
            <div className="login bg-white w-[350px] h-[400px] rounded-[20px] border border-[#4c73ff]">

            </div>
        </div>
    </>)
}

export default Login;