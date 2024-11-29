import Container from "../../components/shared/Container.jsx";
import Header from "../../components/shared/header/Header.jsx";
import Logo from "../../components/shared/header/Logo.jsx";
import Nav from "../../components/shared/header/Nav.jsx";
import NavItem from "../../components/shared/header/NavItem.jsx";
import Button from "../../components/shared/Button.jsx";
import Main from "../../components/main/Main.jsx";


export default function HomeLayouts() {

    return (
        <Container>
            <Header>
                <Logo />
                <Nav>
                    <NavItem to={"/"}>خانه</NavItem>
                    <NavItem to={"#"}>خلاقانه</NavItem>
                    <NavItem to={"#"}>ارتباط</NavItem>
                    <NavItem to={"#"}>اشتراک</NavItem>
                </Nav>
                <Button to={'#'}>بزن بریم حاجی</Button>
            </Header>
            <Main />
        </Container>
    )
}