import {useEffect} from "react";
import Container from "../shared/Container.jsx";
import Error from "./Error.jsx";
// import Button from "../shared/Button.jsx";

const NotFound = () => {
    useEffect(() => {
        document.title = '404 - این صفحه وجود ندارد';
    }, []);

    return (
        <>
            <Container className={"flex flex-col justify-center items-center mx-auto h-[100vh] gap-10"}>
                <Error description={"فکر کنم اشتباه اومدی! آخه این صفحه وجودنداره!"}>404</Error>
                {/*<Button to={"/"} className={"w-[196px]"} grow={false}>صفحه نخست</Button>*/}
            </Container>
        </>
    )
}

export default NotFound;