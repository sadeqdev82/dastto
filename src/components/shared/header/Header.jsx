import {Link} from "react-router-dom";
import Image from "../Image.jsx";
import Nav from "./Nav.jsx";
import NavItem from "./NavItem.jsx";
import Modal from "../Modal.jsx";
import {useState} from "react";

const Header = ({ className }) => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    return (<>
        <header className={className + " " + "hidden lg:flex mt-[45px] items-center justify-between"}>
            <Link to={"/"} className={"grow"}>
                <svg width="115" height="37" viewBox="0 0 115 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 27.9633L0.0183734 26.463C0.0306841 25.4577 0.827648 24.6494 1.80652 24.6494H10.6067L11.5438 27.4112C11.6799 27.8124 11.6764 28.2496 11.5339 28.6484L10.6067 31.243H1.80629C0.827507 31.243 0.0305827 30.4349 0.0181451 29.4297L0 27.9633Z"
                        fill="#443EFF"/>
                    <path
                        d="M10.6067 31.243C10.6495 31.243 10.6798 31.1998 10.6662 31.1581L9.81979 28.5501C9.69624 28.1694 9.69748 27.7576 9.82332 27.3777L10.6883 24.7665C10.7073 24.7091 10.6657 24.6494 10.6067 24.6494C11.1278 24.6494 12.173 24.4615 12.55 24.0857C12.9269 23.7099 13.1154 23.2487 13.1154 22.7021V17.2846C13.1154 16.4506 13.6627 15.7213 14.4479 15.5087L16.8656 14.8542C17.9997 14.5471 19.1097 15.4256 19.1097 16.6301V22.7021C19.1097 23.2487 19.2926 23.7099 19.6585 24.0857C20.0244 24.4615 21.4013 24.6494 21.9225 24.6494L21.9332 27.3367C22.0754 27.7415 22.0747 28.1848 21.9312 28.5891L21.9225 31.243C20.98 31.243 19.1374 31.0836 18.2614 30.7647C17.849 30.6146 17.4562 30.4354 17.0832 30.2272C16.3504 29.8183 15.4432 29.81 14.7103 30.2187C14.3304 30.4305 13.934 30.6125 13.5213 30.7647C12.6564 31.0836 11.5713 31.243 10.6067 31.243ZM6.55506 7.59364C6.55506 6.5793 7.35571 5.75701 8.34335 5.75701H17.4212C18.4088 5.75701 19.2095 6.5793 19.2095 7.59364V8.89117C19.2095 9.90551 18.4088 10.7278 17.4212 10.7278H8.34335C7.35571 10.7278 6.55506 9.90551 6.55506 8.89117V7.59364Z"
                        fill="#443EFF"/>
                    <path
                        d="M20.9911 28.5812C20.8513 28.1817 20.8506 27.7447 20.9891 27.3446L21.9225 24.6494H24.1678C24.7111 24.6494 25.1657 24.4615 25.5317 24.0857C25.8976 23.7099 26.0805 23.2487 26.0805 22.7021V17.7573C26.0805 16.7429 26.8812 15.9207 27.8688 15.9207H30.6956C31.6832 15.9207 32.4839 16.7429 32.4839 17.7573V22.7875C32.4839 23.3 32.6613 23.7384 33.0161 24.1028C33.3709 24.4672 33.7923 24.6494 34.2802 24.6494C34.7902 24.6494 36.1594 24.4729 36.5142 24.1199C36.869 23.7555 37.0464 23.3114 37.0464 22.7875V17.7573C37.0464 16.7429 37.8471 15.9207 38.8347 15.9207H40.4008C41.3884 15.9207 42.1891 16.7429 42.1891 17.7573V22.7875C42.1891 23.3114 42.1055 23.7555 42.4492 24.1199C42.804 24.4729 43.827 24.6494 44.326 24.6494C44.8249 24.6494 45.8479 24.4672 46.2028 24.1028C46.5687 23.7384 46.7516 23.3 46.7516 22.7875V17.2863C46.7516 16.4595 47.2896 15.7346 48.0658 15.5154L50.2965 14.8855C51.435 14.564 52.5589 15.4438 52.5589 16.6564V22.7875C52.5589 24.3135 52.1874 25.7256 51.4445 27.0238C50.7127 28.3106 49.7148 29.3355 48.4508 30.0985C47.1978 30.8615 45.8229 31.243 44.326 31.243C43.4168 31.243 42.5353 31.0892 41.6815 30.7818C41.2593 30.6297 40.8533 30.447 40.4636 30.2337C39.755 29.8458 38.887 29.8498 38.178 30.237C37.7901 30.4489 37.3834 30.6305 36.9579 30.7818C36.1042 31.0892 35.2116 31.243 34.2802 31.243C33.3709 31.243 32.4783 31.0836 31.6024 30.7647C31.1875 30.6117 30.7918 30.4313 30.4153 30.2233C29.6979 29.8271 28.8149 29.8243 28.0986 30.2226C27.7093 30.4391 27.3028 30.6255 26.8789 30.7818C26.0251 31.0892 25.1214 31.243 24.1678 31.243H21.9225L20.9911 28.5812Z"
                        fill="#443EFF"/>
                    <path
                        d="M54.6027 28.0603C54.6027 27.046 55.4033 26.2237 56.391 26.2237H60.7658C61.7362 26.2237 62.5295 25.4289 62.5536 24.4326L62.5954 22.7021C62.5954 22.1669 61.9867 20.5744 61.6208 20.1986C61.2549 19.8228 60.1356 19.6349 59.6256 19.6349H56.4741C55.4865 19.6349 54.6858 18.8126 54.6858 17.7983V16.0149C54.6858 15.0006 55.4865 14.1783 56.4741 14.1783H59.6256C61.1225 14.1783 62.503 14.5598 63.767 15.3228C65.0421 16.0858 66.0511 17.1221 66.794 18.4317C67.5369 19.7413 67.9084 21.1647 67.9084 22.7021L67.7741 29.3685C67.7541 30.3632 66.9665 31.1607 65.9978 31.1671L56.4026 31.231C55.4104 31.2376 54.6027 30.4134 54.6027 29.3944V28.0603Z"
                        fill="#443EFF"/>
                    <path
                        d="M113.636 17.2005C114.387 17.1402 115 17.7727 115 18.5466V21.2685C115 22.0419 114.387 22.6608 113.639 22.7441C112.292 22.894 110.974 23.2679 109.738 23.854C108.12 24.621 106.678 25.7337 105.508 27.1181C105.461 27.1733 105.42 27.2327 105.382 27.2948C104.985 27.952 104.548 28.5827 104.074 29.1832C101.735 32.1561 98.5608 34.3084 94.9881 35.3443C91.4155 36.3802 87.6196 36.2489 84.1221 34.9684C80.6247 33.6879 77.5976 31.3211 75.4567 28.1933C73.5773 25.4475 72.4619 22.2336 72.2174 18.8989C72.1609 18.1283 72.7763 17.5008 73.5288 17.5008H76.158C76.9105 17.5008 77.5129 18.1291 77.5934 18.8975C77.8196 21.0588 78.5681 23.1353 79.7798 24.9318C81.2506 27.1126 83.3332 28.7765 85.7477 29.6998C88.1621 30.623 90.7926 30.7613 93.2855 30.0961C95.7435 29.4402 97.9514 28.0341 99.6213 26.0631C99.6686 26.0072 99.7109 25.947 99.7489 25.884C100.145 25.227 100.582 24.5967 101.057 23.997C102.923 21.6231 105.33 19.7619 108.062 18.5791C109.163 18.104 110.307 17.7458 111.478 17.5097C112.191 17.3619 112.912 17.2587 113.636 17.2005Z"
                        fill="#443EFF"/>
                    <path
                        d="M76.8754 2.6659C76.6874 1.79241 77.3347 0.964554 78.2058 0.964554H81.7329C82.3722 0.964554 82.9255 1.42097 83.0634 2.06203L86.0901 16.1333C86.1904 16.5992 86.5925 16.9309 87.0571 16.9309C87.604 16.9309 88.0473 16.4756 88.0473 15.9139V2.36389C88.0473 1.59106 88.6574 0.964554 89.4099 0.964554H92.854C93.6065 0.964554 94.2165 1.59106 94.2165 2.36389V15.8863C94.2165 16.4632 94.6719 16.9309 95.2336 16.9309C95.7108 16.9309 96.1239 16.5902 96.2268 16.1116L99.2489 2.06203C99.3868 1.42097 99.9401 0.964554 100.579 0.964554H104.107C104.978 0.964554 105.625 1.79241 105.437 2.6659L101.898 19.1082C101.76 19.7491 101.207 20.2054 100.568 20.2054H81.7445C81.1053 20.2054 80.5521 19.7491 80.4141 19.1082L76.8754 2.6659Z"
                        fill="#443EFF"/>
                    <path
                        d="M5.10864 20.9028C4.9494 20.6561 5.01509 20.3235 5.25535 20.16L6.60302 19.2431C6.63177 19.2235 6.61829 19.1775 6.5838 19.1775C6.27565 19.174 5.94572 19.0632 5.59402 18.8449C5.24233 18.6231 4.9459 18.3165 4.70473 17.925C4.46357 17.53 4.34299 17.0882 4.34299 16.5997C4.34299 16.1319 4.45519 15.6988 4.67961 15.3004C4.90738 14.8985 5.21218 14.5814 5.59402 14.3493C5.97921 14.1137 6.3979 13.9959 6.85008 13.9959C8.24026 13.9959 9.36723 15.1533 9.36723 16.5811V18.2574C9.36723 19.1865 8.91623 20.0543 8.16472 20.5715L6.71444 21.5694C6.26556 21.8783 5.6577 21.7534 5.35915 21.2908L5.10864 20.9028ZM6.85601 17.1714C7.17461 17.1714 7.43289 16.9061 7.43289 16.5789C7.43289 16.2517 7.17461 15.9864 6.85601 15.9864H6.85008C6.69266 15.9864 6.55868 16.0453 6.44814 16.1631C6.33761 16.2775 6.28234 16.4161 6.28234 16.5789C6.28234 16.7452 6.33761 16.8855 6.44814 16.9999C6.55868 17.1142 6.69266 17.1714 6.85008 17.1714H6.85601Z"
                        fill="#443EFF"/>
                </svg>
            </Link>
            <Nav>
                <NavItem to={"/"}>خانه</NavItem>
                <NavItem to={"#"}>خلاقانه</NavItem>
                <NavItem to={"#"}>ارتباط</NavItem>
                <NavItem to={"#"}>اشتراک</NavItem>
            </Nav>
            <div className="grow flex justify-end items-center">
                <button className={"min-w-[135px] px-4 py-2 h-[45px] bg-[#443EFF] rounded-[505px] justify-center items-center gap-2.5 inline-flex text-white text-[18px] font-semibold"} onClick={() => {
                    setLoginModalOpen(true)
                }}>
                    بزن بریم حاجی
                </button>
            </div>
        </header>
        <Modal show={loginModalOpen} callback={() => {
            setLoginModalOpen(false)
        }}>

        </Modal>
    </>)
}

export default Header;