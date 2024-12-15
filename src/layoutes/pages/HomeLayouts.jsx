import Container from "../../components/shared/Container.jsx";
import Header from "../../components/shared/header/Header.jsx";
import Nav from "../../components/main/Nav.jsx";
import NavItem from "../../components/main/NavItem.jsx";
import Main from "../../components/main/Main.jsx";
import Image from "../../components/shared/Image.jsx";


export default function HomeLayouts() {

    return (
        <Container>
            {/*Menu*/}
            <Header />
            {/*Main*/}
            <Main/>
            {/*Nav*/}
            <Nav>
                <NavItem to={"/"}>خانه</NavItem>
                <NavItem to={"#"}>خلاقانه</NavItem>
                <NavItem to={"#"}>ارتباط</NavItem>
                <NavItem to={"#"}>اشتراک</NavItem>
            </Nav>
            {/*Template*/}
            <Image src={'/images/Template.png'} alt={'template'} className={'mx-auto mt-14 mb-10 w-[402px]'}/>
        </Container>
    )
}
