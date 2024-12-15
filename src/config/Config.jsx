import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Config = () => {
    const location = useLocation();

    useEffect(() => {
        document.body.classList.remove('bg-login');
    }, [location]);

    return null
}

export default Config;