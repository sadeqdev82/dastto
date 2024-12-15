const Label = ({ children, for:htmlFor ,className }) => {
    return (<>
        <label for={htmlFor} className={className}>
            {children}
        </label>
    </>)
}

export default Label;