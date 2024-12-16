import Container from "../../components/shared/Container.jsx";
import Header from "../../components/shared/header/Header.jsx";
import Login from "../../components/auth/Login.jsx";


export default function LoginLayouts() {

    return (
        <Container>
            <Header />
            {/*Login*/}
            <Login />
        </Container>
    )
}
