import {Link} from "react-router-dom";
import Image from "../Image.jsx";

const Nav = ({ nav = 1,children }) => {
    const handle = () => {
        if (nav === 1) {
            return <>
                <nav className={"grow flex items-center justify-center"}>
                    <ul className={"border-0 p-0 m-0 flex items-center justify-center gap-[60px]"}>
                        {children}
                    </ul>
                </nav>
            </>
        }else if (nav === 2) {
            return <>
                <nav className={"grow flex items-center justify-center mt-[120px] sticky top-[37px] right-1/2 transform -translate-x-1"}>
                    <ul className={"border-0 p-0 m-0 flex items-center flex-row-reverse rounded-[100px] px-6 py-3.5 bg-[#F5F8FD] justify-center gap-[40px]"}>
                        <li>
                            <Link to="/">
                                <Image src={'/images/dasto_black.png'} alt={'dastto black'}/>
                            </Link>
                        </li>
                        {children}
                    </ul>
                </nav>
            </>
        }
    }

    return (
        <>
            { handle() }
        </>
    )
}

export default Nav;