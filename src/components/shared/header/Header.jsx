const Header = ({ children, className }) => {

    return (
        <header className={className + " " + "mt-[45px] items-center justify-between"}>
            { children }
        </header>
    )
}

export default Header;