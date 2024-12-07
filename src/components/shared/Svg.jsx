import {useState} from "react";

const Svg = ({ id, className }) => {

    const [svg, setSvg] = useState({
        1: (
            <svg className={"w-[27px]" + " " + className} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     fill="#000000">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>hamburger</title>
                        <desc>Created with Sketch Beta.</desc>
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Icon-Set-Filled" transform="translate(-212.000000, -888.000000)" fill="#4C73FF">
                                <path
                                    d="M230,904 L214,904 C212.896,904 212,904.896 212,906 C212,907.104 212.896,908 214,908 L230,908 C231.104,908 232,907.104 232,906 C232,904.896 231.104,904 230,904 L230,904 Z M230,896 L214,896 C212.896,896 212,896.896 212,898 C212,899.104 212.896,900 214,900 L230,900 C231.104,900 232,899.104 232,898 C232,896.896 231.104,896 230,896 L230,896 Z M214,892 L230,892 C231.104,892 232,891.104 232,890 C232,888.896 231.104,888 230,888 L214,888 C212.896,888 212,888.896 212,890 C212,891.104 212.896,892 214,892 L214,892 Z"
                                    id="hamburger"></path>
                            </g>
                        </g>
                    </g>
                </svg>
        )
    });

    return (<>
        { svg[id] }
    </>)
}

export default Svg;