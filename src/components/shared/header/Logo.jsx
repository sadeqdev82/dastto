import {Link} from "react-router-dom";

const Logo = ({ className, grow = true, logo = 1 }) => {
    const handler = () => {
        if (logo === 1){
            return <Link to={"/"} className={(grow === true ? "grow" : " ")}>
                <svg xmlns="http://www.w3.org/2000/svg" className={className + " " + "w-[115px] h-[35px]"} viewBox="0 0 142 44" fill="none">
                    <path
                        d="M0 33.6028L0.0226872 31.7633C0.0378881 30.5308 1.02197 29.5397 2.23066 29.5397H13.0969L14.254 32.9259C14.4221 33.4178 14.4178 33.9538 14.2418 34.4428L13.0969 37.624H2.23037C1.02179 37.624 0.037763 36.6332 0.0224052 35.4008L0 33.6028Z"
                        fill="#4C73FF"/>
                    <path
                        d="M13.0969 37.624C13.1499 37.624 13.1872 37.5711 13.1705 37.5199L12.1253 34.3223C11.9727 33.8555 11.9743 33.3507 12.1297 32.8849L13.1977 29.6833C13.2212 29.6129 13.1699 29.5397 13.0969 29.5397C13.7404 29.5397 15.031 29.3094 15.4965 28.8486C15.962 28.3878 16.1947 27.8224 16.1947 27.1522V20.5099C16.1947 19.4873 16.8704 18.593 17.84 18.3324L20.8253 17.5299C22.2257 17.1535 23.5963 18.2305 23.5963 19.7074V27.1522C23.5963 27.8224 23.8222 28.3878 24.274 28.8486C24.7258 29.3094 26.426 29.5397 27.0695 29.5397L27.0828 32.8346C27.2584 33.3309 27.2575 33.8744 27.0802 34.3702L27.0695 37.624C25.9057 37.624 23.6305 37.4286 22.5489 37.0376C22.0396 36.8535 21.5547 36.6339 21.094 36.3786C20.1892 35.8773 19.069 35.8671 18.164 36.3681C17.6949 36.6279 17.2055 36.851 16.6958 37.0376C15.6279 37.4286 14.2881 37.624 13.0969 37.624ZM8.09408 8.62784C8.09408 7.38417 9.0827 6.37597 10.3022 6.37597H21.5114C22.7309 6.37597 23.7195 7.38417 23.7195 8.62784V10.2187C23.7195 11.4624 22.7309 12.4706 21.5114 12.4706H10.3022C9.0827 12.4706 8.09408 11.4624 8.09408 10.2187V8.62784Z"
                        fill="#4C73FF"/>
                    <path
                        d="M25.9194 34.3605C25.7468 33.8706 25.7459 33.3348 25.917 32.8443L27.0695 29.5397H29.842C30.5129 29.5397 31.0742 29.3094 31.526 28.8486C31.9779 28.3878 32.2038 27.8224 32.2038 27.1522V21.0894C32.2038 19.8457 33.1924 18.8375 34.4119 18.8375H37.9024C39.1219 18.8375 40.1105 19.8457 40.1105 21.0894V27.2569C40.1105 27.8852 40.3296 28.4227 40.7677 28.8695C41.2059 29.3163 41.7261 29.5397 42.3285 29.5397C42.9583 29.5397 44.649 29.3233 45.0871 28.8905C45.5252 28.4437 45.7443 27.8992 45.7443 27.2569V21.0894C45.7443 19.8457 46.7329 18.8375 47.9524 18.8375H49.8862C51.1057 18.8375 52.0943 19.8457 52.0943 21.0894V27.2569C52.0943 27.8992 51.9911 28.4437 52.4155 28.8905C52.8537 29.3233 54.1168 29.5397 54.7329 29.5397C55.3491 29.5397 56.6122 29.3163 57.0504 28.8695C57.5022 28.4227 57.7281 27.8852 57.7281 27.2569V20.5119C57.7281 19.4981 58.3923 18.6094 59.3508 18.3406L62.1053 17.5683C63.511 17.1741 64.8988 18.2528 64.8988 19.7396V27.2569C64.8988 29.1279 64.4401 30.8592 63.5228 32.4509C62.6192 34.0287 61.387 35.2853 59.8261 36.2208C58.279 37.1563 56.5813 37.624 54.7329 37.624C53.6103 37.624 52.5218 37.4355 51.4676 37.0585C50.9462 36.8721 50.4449 36.6481 49.9638 36.3866C49.0888 35.9109 48.017 35.9158 47.1416 36.3906C46.6626 36.6504 46.1604 36.8731 45.635 37.0585C44.5808 37.4355 43.4786 37.624 42.3285 37.624C41.2058 37.624 40.1037 37.4286 39.0221 37.0376C38.5098 36.8501 38.0212 36.6288 37.5562 36.3738C36.6704 35.8881 35.5801 35.8846 34.6957 36.373C34.215 36.6384 33.713 36.8669 33.1895 37.0585C32.1353 37.4355 31.0195 37.624 29.842 37.624H27.0695L25.9194 34.3605Z"
                        fill="#4C73FF"/>
                    <path
                        d="M67.4224 33.7218C67.4224 32.4781 68.4111 31.4699 69.6306 31.4699H75.0326C76.2308 31.4699 77.2103 30.4955 77.2401 29.274L77.2917 27.1522C77.2917 26.4959 76.5401 24.5434 76.0883 24.0826C75.6365 23.6219 74.2544 23.3915 73.6246 23.3915H69.7333C68.5137 23.3915 67.5251 22.3833 67.5251 21.1396V18.9531C67.5251 17.7094 68.5137 16.7012 69.7333 16.7012H73.6246C75.473 16.7012 77.1776 17.169 78.7384 18.1045C80.3129 19.04 81.5588 20.3105 82.4761 21.9162C83.3934 23.5219 83.8521 25.2672 83.8521 27.1522L83.6863 35.3258C83.6615 36.5454 82.689 37.5231 81.4929 37.531L69.6449 37.6093C68.4198 37.6174 67.4224 36.6069 67.4224 35.3575V33.7218Z"
                        fill="#4C73FF"/>
                    <path
                        d="M140.316 20.4067C141.244 20.3328 142 21.1082 142 22.0572V25.3945C142 26.3427 141.244 27.1015 140.319 27.2036C138.656 27.3875 137.029 27.8458 135.502 28.5644C133.504 29.5049 131.724 30.8692 130.28 32.5666C130.222 32.6343 130.171 32.7071 130.124 32.7833C129.634 33.589 129.094 34.3623 128.509 35.0986C125.62 38.7435 121.701 41.3825 117.29 42.6526C112.878 43.9228 108.191 43.7618 103.873 42.1918C99.554 40.6217 95.8161 37.7198 93.1726 33.8848C90.8519 30.5182 89.4747 26.5777 89.1728 22.4891C89.103 21.5442 89.8629 20.7749 90.792 20.7749H94.0386C94.9677 20.7749 95.7116 21.5453 95.8109 22.4874C96.0903 25.1374 97.0146 27.6832 98.5107 29.886C100.327 32.5599 102.898 34.5999 105.88 35.7319C108.861 36.8639 112.109 37.0335 115.187 36.2179C118.222 35.4137 120.949 33.6897 123.011 31.273C123.069 31.2045 123.121 31.1307 123.168 31.0535C123.658 30.2479 124.197 29.4751 124.783 28.7398C127.088 25.8292 130.06 23.5472 133.433 22.0969C134.792 21.5145 136.206 21.0752 137.651 20.7859C138.532 20.6046 139.422 20.478 140.316 20.4067Z"
                        fill="#4C73FF"/>
                    <path
                        d="M94.9244 2.586C94.6922 1.51502 95.4916 0.5 96.5671 0.5H100.922C101.712 0.5 102.395 1.0596 102.565 1.8456L106.303 19.0982C106.426 19.6695 106.923 20.0762 107.497 20.0762C108.172 20.0762 108.719 19.5179 108.719 18.8292V2.21571C108.719 1.26815 109.473 0.5 110.402 0.5H114.654C115.584 0.5 116.337 1.26815 116.337 2.21571V18.7953C116.337 19.5027 116.899 20.0762 117.593 20.0762C118.182 20.0762 118.692 19.6584 118.819 19.0716L122.551 1.8456C122.721 1.05961 123.404 0.5 124.194 0.5H128.549C129.624 0.5 130.424 1.51502 130.192 2.586L125.822 22.7457C125.652 23.5316 124.969 24.091 124.179 24.091H100.937C100.147 24.091 99.4643 23.5316 99.2939 22.7457L94.9244 2.586Z"
                        fill="#4C73FF"/>
                    <path
                        d="M6.30807 24.946C6.11144 24.6435 6.19255 24.2357 6.48921 24.0353L8.15329 22.9111C8.1888 22.8871 8.17215 22.8307 8.12956 22.8307C7.74906 22.8264 7.34167 22.6905 6.9074 22.4229C6.47313 22.151 6.10711 21.775 5.80932 21.295C5.51154 20.8107 5.36264 20.269 5.36264 19.6701C5.36264 19.0965 5.5012 18.5655 5.7783 18.077C6.05954 17.5842 6.43591 17.1955 6.9074 16.9109C7.38303 16.622 7.90002 16.4776 8.45836 16.4776C10.1749 16.4776 11.5665 17.8967 11.5665 19.6472V21.7026C11.5665 22.8417 11.0096 23.9058 10.0817 24.5398L8.29087 25.7634C7.73661 26.1421 6.98603 25.9889 6.61739 25.4218L6.30807 24.946ZM8.46568 20.371C8.85909 20.371 9.17801 20.0458 9.17801 19.6446C9.17801 19.2434 8.85909 18.9181 8.46568 18.9181H8.45836C8.26398 18.9181 8.09854 18.9903 7.96206 19.1348C7.82557 19.275 7.75733 19.4449 7.75733 19.6446C7.75733 19.8485 7.82557 20.0205 7.96206 20.1607C8.09854 20.3009 8.26398 20.371 8.45836 20.371H8.46568Z"
                        fill="#4C73FF"/>
                </svg>
            </Link>
        }else if (logo === 2){
            return <img src={"/images/logo.png"} alt={"logo"} className={className}/>
        }else if (logo === 3){
            return <Link to={"/"} className={(grow === true ? "grow" : " ") + " " + className}>
                <img src={"/images/logo_1.2.svg"} alt={"logo"} className={className}/>
            </Link>
        }
    }

    return (
        <>
            {handler()}
    </>
)
}

export default Logo;