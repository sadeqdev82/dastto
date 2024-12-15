const Nav = ({children}) => {

    return (<>
            <nav className={"grow flex items-center justify-center"}>
                <ul className={"border-0 p-0 m-0 flex items-center justify-center gap-[60px]"}>
                    {children}
                </ul>
            </nav>
        </>)
}

export default Nav;