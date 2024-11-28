import Container from "../../components/shared/Container.jsx";
import Header from "../../components/home/Header.jsx";
import Logo from "../../components/shared/Logo.jsx";
import {useEffect} from "react";


export default function HomeLayouts() {
    
    return (
        <Container>
            <Header>
                <Logo />
            </Header>
        </Container>
    )
}