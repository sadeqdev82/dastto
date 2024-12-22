import Container from "../../components/shared/Container.jsx";
import Header from "../../components/shared/header/Header.jsx";
import Nav from "../../components/main/Nav.jsx";
import Main from "../../components/main/Main.jsx";
import Image from "../../components/shared/Image.jsx";
import Modal from "../../components/shared/Modal.jsx";

export default function HomeLayouts() {

    return (
        <Container>
            {/*Menu*/}
            <Header />
            {/*Main*/}
            <Main/>
            {/*Nav*/}
            <Nav />
            {/*Template*/}
            <Image src={'/images/Template.png'} alt={'template'} className={'mx-auto mt-14 mb-10 w-[402px]'}/>
        </Container>
    )
}
