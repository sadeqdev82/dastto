const Error = ({ children, className, description }) => {

    return (
        <>
            <h1 className={"text-[#4c73ff] text-[190px] sm:text-[200px] leading-[1] font-bold tracking-[7.50px] text-shadow-1"}>{children}</h1>
            <p className={"sm:text-[20px] text-[16px] font-[600]"}>{ description }</p>
        </>
    )
}

export default Error;