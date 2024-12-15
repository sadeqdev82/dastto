const Form = ({ children, action, method, className }) => {

    return (<>
        <form action={action} method={method} className={className}>
            { children }
        </form>
    </>)
}

export default Form