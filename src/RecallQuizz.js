import React from "react"
export default function RecallQuizz(){
    const cardTitle = ["Pergunta 1", "Pergunta 2", "Pergunta 3"];
    const [icon, setIcon] = React.useState("play-outline");
    const [cardtext, setCardtext] = React.useState("cardTitle");
    function turnCard(icon){
        if(icon === "play-outline"){
            setIcon("reload-outline")
            setCardtext("cardQuestion")
        } else {
            setIcon("play-outline")
            setCardtext("cardTitle")
        }
    }
    return(
        <div className="recallPage">
            <LogoHeader />
            <ul>
                {cardTitle.map((card , index) =>
                <li className="card btn" key={index}>
                    <h2 className={cardtext}>{card}</h2>
                    <ion-icon name={icon} className="btn" onClick={(icon) => turnCard}></ion-icon>
                </li>
                )}
            </ul>
            <Footer />
        </div>
    )
}
function LogoHeader(){
    return(
        <div className="logoHeader">
            <img className="zapLogo" src="assets/ZapRecallLogo.png" alt="ZapRecall"/>
            <h1 className="logoTitle">ZapRecall</h1>
        </div>
    )
}
function Footer(){
    return(
        <div className="footer">

        </div>
    )
}