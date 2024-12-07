import Logo from "../shared/header/Logo.jsx";
import Image from "../shared/Image.jsx";
import Paragraph from "../shared/Paragraph.jsx";
import Button from "../shared/Button.jsx";

const Main = () => {

    return (<>
            <main className={"mt-[120px] w-full flex flex-col justify-center items-center gap-2"}>
                <div className={'flex justify-center items-center gap-1'}>
                    <Logo logo={2} className={"w-[63px]"}/>
                    <span className={'font-bold text-[45px]'}>با</span>
                    <svg className={'mb-2'} xmlns="http://www.w3.org/2000/svg" width="84" height="33"
                         viewBox="0 0 84 33"
                         fill="none">
                        <path
                            d="M-0.00585938 28.1823L0.0168278 26.3428C0.0320288 25.1102 1.01611 24.1192 2.2248 24.1192H13.0911L14.2482 27.5054C14.4163 27.9972 14.4119 28.5333 14.2359 29.0223L13.0911 32.2035H2.22451C1.01593 32.2035 0.0319037 31.2127 0.0165458 29.9802L-0.00585938 28.1823Z"
                            fill="#4C73FF"/>
                        <path
                            d="M13.0911 32.2035C13.144 32.2035 13.1814 32.1506 13.1646 32.0994L12.1195 28.9017C11.9669 28.435 11.9684 27.9301 12.1238 27.4644L13.1919 24.2628C13.2153 24.1923 13.164 24.1192 13.0911 24.1192C13.7345 24.1192 15.0251 23.8888 15.4906 23.4281C15.9561 22.9673 16.1889 22.4018 16.1889 21.7316V15.0893C16.1889 14.0667 16.8645 13.1725 17.8342 12.9118L20.8195 12.1094C22.2198 11.7329 23.5904 12.81 23.5904 14.2869V21.7316C23.5904 22.4018 23.8163 22.9673 24.2682 23.4281C24.72 23.8888 26.4201 24.1192 27.0636 24.1192L27.0769 27.414C27.2525 27.9104 27.2516 28.4539 27.0744 28.9497L27.0636 32.2035C25.8999 32.2035 23.6247 32.008 22.543 31.6171C22.0338 31.433 21.5488 31.2133 21.0881 30.9581C20.1833 30.4567 19.0631 30.4466 18.1582 30.9476C17.689 31.2073 17.1996 31.4305 16.69 31.6171C15.622 32.008 14.2822 32.2035 13.0911 32.2035ZM8.08822 3.20731C8.08822 1.96364 9.07684 0.955444 10.2964 0.955444H21.5055C22.725 0.955444 23.7137 1.96364 23.7137 3.20731V4.7982C23.7137 6.04187 22.725 7.05007 21.5055 7.05007H10.2964C9.07684 7.05007 8.08822 6.04187 8.08822 4.7982V3.20731Z"
                            fill="#4C73FF"/>
                        <path
                            d="M25.9136 28.94C25.7409 28.45 25.7401 27.9142 25.9111 27.4238L27.0636 24.1192H29.8361C30.507 24.1192 31.0684 23.8888 31.5202 23.4281C31.972 22.9673 32.1979 22.4018 32.1979 21.7316V15.6688C32.1979 14.4252 33.1865 13.417 34.4061 13.417H37.8965C39.1161 13.417 40.1047 14.4252 40.1047 15.6688V21.8363C40.1047 22.4647 40.3237 23.0022 40.7619 23.449C41.2 23.8958 41.7203 24.1192 42.3227 24.1192C42.9525 24.1192 44.6431 23.9028 45.0812 23.47C45.5194 23.0232 45.7384 22.4786 45.7384 21.8363V15.6688C45.7384 14.4252 46.727 13.417 47.9466 13.417H49.8803C51.0999 13.417 52.0885 14.4252 52.0885 15.6688V21.8363C52.0885 22.4786 51.9852 23.0232 52.4097 23.47C52.8478 23.9028 54.111 24.1192 54.7271 24.1192C55.3432 24.1192 56.6064 23.8958 57.0445 23.449C57.4963 23.0022 57.7222 22.4647 57.7222 21.8363V15.0914C57.7222 14.0776 58.3865 13.1888 59.345 12.9201L62.0994 12.1478C63.5051 11.7536 64.893 12.8323 64.893 14.3191V21.8363C64.893 23.7073 64.4343 25.4387 63.517 27.0304C62.6133 28.6082 61.3811 29.8648 59.8203 30.8003C58.2732 31.7358 56.5754 32.2035 54.7271 32.2035C53.6044 32.2035 52.5159 32.015 51.4617 31.638C50.9403 31.4516 50.4391 31.2276 49.9579 30.966C49.0829 30.4904 48.0111 30.4953 47.1357 30.9701C46.6567 31.2299 46.1545 31.4525 45.6292 31.638C44.5749 32.015 43.4728 32.2035 42.3227 32.2035C41.2 32.2035 40.0978 32.008 39.0162 31.6171C38.504 31.4295 38.0154 31.2083 37.5504 30.9533C36.6645 30.4676 35.5743 30.4641 34.6898 30.9525C34.2092 31.2179 33.7071 31.4464 33.1837 31.638C32.1294 32.015 31.0136 32.2035 29.8361 32.2035H27.0636L25.9136 28.94Z"
                            fill="#4C73FF"/>
                        <path
                            d="M67.4166 28.3013C67.4166 27.0576 68.4052 26.0494 69.6247 26.0494H75.0267C76.2249 26.0494 77.2045 25.0749 77.2342 23.8534L77.2859 21.7316C77.2859 21.0754 76.5342 19.1229 76.0824 18.6621C75.6306 18.2014 74.2486 17.971 73.6188 17.971H69.7274C68.5079 17.971 67.5193 16.9628 67.5193 15.7191V13.5326C67.5193 12.2889 68.5079 11.2807 69.7274 11.2807H73.6188C75.4671 11.2807 77.1717 11.7484 78.7325 12.6839C80.307 13.6194 81.5529 14.89 82.4703 16.4957C83.3876 18.1014 83.8463 19.8467 83.8463 21.7316L83.6804 29.9052C83.6557 31.1248 82.6832 32.1026 81.487 32.1105L69.639 32.1888C68.4139 32.1969 67.4166 31.1864 67.4166 29.937V28.3013Z"
                            fill="#4C73FF"/>
                        <path
                            d="M6.30221 19.5255C6.10558 19.223 6.18669 18.8152 6.48336 18.6148L8.14744 17.4905C8.18294 17.4665 8.16629 17.4102 8.1237 17.4102C7.7432 17.4059 7.33581 17.27 6.90154 17.0023C6.46727 16.7305 6.10125 16.3545 5.80346 15.8744C5.50568 15.3902 5.35679 14.8485 5.35679 14.2495C5.35679 13.676 5.49534 13.145 5.77244 12.6565C6.05368 12.1637 6.43005 11.775 6.90154 11.4903C7.37717 11.2015 7.89416 11.057 8.4525 11.057C10.1691 11.057 11.5606 12.4761 11.5606 14.2267V16.282C11.5606 17.4211 11.0037 18.4852 10.0758 19.1193L8.28501 20.3429C7.73075 20.7216 6.98017 20.5684 6.61153 20.0013L6.30221 19.5255ZM8.45982 14.9505C8.85323 14.9505 9.17215 14.6252 9.17215 14.224C9.17215 13.8228 8.85323 13.4976 8.45982 13.4976H8.4525C8.25812 13.4976 8.09268 13.5698 7.9562 13.7143C7.81971 13.8544 7.75147 14.0244 7.75147 14.224C7.75147 14.4279 7.81971 14.6 7.9562 14.7402C8.09268 14.8804 8.25812 14.9505 8.4525 14.9505H8.45982Z"
                            fill="#4C73FF"/>
                    </svg>
                    <span className={'text-[45px] font-semibold'}>
                    ،
                    دست
                    <span className={'font-bold text-[#4C73FF]'}> سوم </span>
                    داشته باش
                </span>
                </div>
                <div className={'flex justify-center items-center gap-1'}>
                    <span className={'text-[45px]'}>روی</span>
                    <div className={'relative w-[85px] h-[62px]'}>
                        <Image src={'/images/dribbble.svg'} alt={'dribbble'}
                               className={'top-0 right-0 absolute w-[62px] h-[62px] rounded-[20px] overflow-hidden opacity-70 rotate-[15deg]'}/>
                        <Image src={'/images/pinterest.svg'} alt={'pinterest'}
                               className={'top-0 left-0 absolute w-[62px] h-[62px] rounded-[20px] overflow-hidden rotate-[-15deg]'}/>
                    </div>
                    <span className={'text-[45px] font-semibold'}>
                    <span className={'font-bold'}> موبایلتون </span>
                     دست
                </span>
                </div>
                <Paragraph className={''}>تقویم، تودولیست، اینترنت، ابزار مالی و ... یک‌جا و متصل</Paragraph>
                <div className={'flex justify-center items-center gap-3'}>
                    <Button>دانلود اپلیکیشن</Button>
                    <Button style={'secondary'}>دانلود وب اپ</Button>
                </div>
            </main>
        </>)
}

export default Main;