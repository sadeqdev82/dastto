const Container = ({ children, className }) => {

    return (
        <div className={"container mx-auto sm:px-32 px-5" + " " + className}>
            { children }
        </div>
    )
}

export default Container;