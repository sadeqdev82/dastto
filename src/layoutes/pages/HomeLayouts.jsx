import Container from "../../components/shared/Container.jsx";
import Header from "../../components/shared/header/Header.jsx";
import Logo from "../../components/shared/header/Logo.jsx";
import Nav from "../../components/shared/header/Nav.jsx";
import NavItem from "../../components/shared/header/NavItem.jsx";
import Button from "../../components/shared/Button.jsx";
import Main from "../../components/main/Main.jsx";
import Image from "../../components/shared/Image.jsx";
import Svg from "../../components/shared/Svg.jsx";
import {useState} from "react";


export default function HomeLayouts() {

    return (
        <Container>
            {/*Menu*/}
            <Header className={'hidden lg:flex'}>
                <Logo/>
                <Nav>
                    <NavItem to={"/"}>خانه</NavItem>
                    <NavItem to={"#"}>خلاقانه</NavItem>
                    <NavItem to={"#"}>ارتباط</NavItem>
                    <NavItem to={"#"}>اشتراک</NavItem>
                </Nav>
                <Button to={'#'}>بزن بریم حاجی</Button>
            </Header>
            {/*Responsive Menu*/}
            <Header className={'flex lg:hidden'}>
                <Button style={'secondary'}
                        className={'min-w-[auto] !p-0 w-[55px] h-[56px] flex justify-center items-center !rounded-[11px]'}
                        parentClassName={'!justify-start'}>
                        <Svg id={1}/>
                </Button>
                <Button to={'#'} parentClassName={'justify-center'}>بزن بریم حاجی</Button>
                <Logo logo={3} className={'justify-end flex'}/>
            </Header>
            {/*Main*/}
            <Main/>
            {/*Nav*/}
            <Nav nav={2}>
                <NavItem to={"/"} nav={2}>خانه</NavItem>
                <NavItem to={"#"} nav={2}>خلاقانه</NavItem>
                <NavItem to={"#"} nav={2}>ارتباط</NavItem>
                <NavItem to={"#"} nav={2}>اشتراک</NavItem>
            </Nav>
            {/*Template*/}
            <Image src={'/images/Template.png'} alt={'template'} className={'mx-auto mt-14 mb-10'}/>
        </Container>
    )
}
