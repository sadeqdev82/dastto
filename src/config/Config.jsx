import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Config = () => {
    const location = useLocation();

    useEffect(() => {

    }, [location]);

    function log(message){
        console.log(message)
    }

    return null
}

export default Config;