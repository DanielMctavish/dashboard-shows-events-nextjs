import Head from "next/head";


export default function NavMenu() {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles/NavMenu.css" />
            </Head>
            <div className="navmenu" onMouseOut={()=>{document.querySelector(".navmenu").classList.remove("active")}} onMouseOver={()=>{
                document.querySelector(".navmenu").classList.add("active")
            }}>
                <div className="user-status">
                    <img src="" alt="" />
                    <span>usuário</span>
                </div>
                <div className="user-events">Meus Eventos</div>
            </div>
        </>
    )
}