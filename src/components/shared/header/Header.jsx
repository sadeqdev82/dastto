const Header = ({ children, className }) => {

    return (
        <header className={className + " " + "mt-[45px] flex items-center justify-between"}>
            { children }
        </header>
    )
}

export default Header;