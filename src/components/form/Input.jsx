const Input = ({ type, className, value, placeholder, id, name  }) => {
    return (<>
        <input type={type} className={className} value={value} id={id} name={name} placeholder={placeholder}/>
    </>)
}

export default Input;