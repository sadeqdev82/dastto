import Logo from "../shared/header/Logo.jsx";

const Main = () => {

    return (
        <main className={"mt-[120px] w-full flex flex-col justify-center items-center gap-6"}>
            <Logo logo={2} className={"w-[72px] h-[72px]"}/>
        </main>
    )
}

export default Main;