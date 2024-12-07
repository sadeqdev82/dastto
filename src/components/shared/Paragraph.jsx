const Paragraph = ({children, className}) => {
    return (
        <>
            <p className={"text-center text-[#96979e]/60 font-semibold text-[20px] my-5" + "" + className}>{children}</p>
        </>
    );
}

export default Paragraph;