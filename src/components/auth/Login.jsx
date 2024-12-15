import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Login = () => {
    useEffect(() => {
        document.body.classList.add('bg-login');
    }, [])

    return (<>
        <div className={"flex justify-center items-center h-[100vh]"}>
            <div className="login bg-white w-[328px] h-[400px] rounded-[20px]">
                <div className={"mt-[25px] flex justify-center items-center gap-2 flex-row-reverse"}>
                    <h1 className={"text-[20px] font-semibold"}>ورود و عضویت</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path
                            d="M12 2.5C9.38 2.5 7.25 4.63 7.25 7.25C7.25 9.82 9.26 11.9 11.88 11.99C11.96 11.98 12.04 11.98 12.1 11.99C12.12 11.99 12.13 11.99 12.15 11.99C12.16 11.99 12.16 11.99 12.17 11.99C14.73 11.9 16.74 9.82 16.75 7.25C16.75 4.63 14.62 2.5 12 2.5Z"
                            fill="black"/>
                        <path
                            d="M17.08 14.65C14.29 12.79 9.74002 12.79 6.93002 14.65C5.66002 15.5 4.96002 16.65 4.96002 17.88C4.96002 19.11 5.66002 20.25 6.92002 21.09C8.32002 22.03 10.16 22.5 12 22.5C13.84 22.5 15.68 22.03 17.08 21.09C18.34 20.24 19.04 19.1 19.04 17.86C19.03 16.63 18.34 15.49 17.08 14.65Z"
                            fill="black"/>
                    </svg>
                </div>
                <p className={"font-semibold text-center mt-[10px] text-[#96979E99]"}>برای ورود باید فیلد های پایین رو پر کنی.</p>

            </div>
        </div>
    </>)
}

export default Login;