import {Link} from "react-router-dom";

const Button = ({style = "primary", to = null, children, className, grow = true}) => {
    const handleResult = () => {
        if (style === "primary") {
            return <Link to={to}
                         className={className + " " + "min-w-[160px] px-4 py-2 h-[45px] bg-[#4c73ff] rounded-[505px] justify-center items-center gap-2.5 inline-flex text-white text-[18px] font-semibold"}>{children}</Link>
        }
        if (style === "secondary") {
            return <Link to={to}
                         className={className + " " + "min-w-[160px] px-4 py-2 h-[45px] text-[#4c73ff] rounded-[505px] justify-center items-center gap-2.5 flex  bg-[#EDF1FF] text-[18px] font-semibold"}>{children}</Link>
        }
    }

    return (<div className={(grow === true ? "grow" : "grow-0") + " " + "flex items-center justify-end"}>
            {handleResult()}
        </div>)
}

export default Button;