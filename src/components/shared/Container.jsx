const Container = ({ children, className }) => {

    return (
        <div className={"container mx-auto px-32" + " " + className}>
            { children }
        </div>
    )
}

export default Container;