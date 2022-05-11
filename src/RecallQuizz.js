import React from "react"
import DeckSelector from "./Decks/DeckSelector";
export default function RecallQuizz(){
    const deck = "react" // Para quando for pegar outros decks
    return(
        <div className="recallPage">
            <LogoHeader />
            <ul>
                {DeckSelector().map((card, index) =>
                    <Cards index={index} question={card.question} answer={card.question}/>
                )}
            </ul>
            <Footer />
        </div>
    )
}


function Cards(props){
    const cardTitle = ["Pergunta 1", "Pergunta 2", "Pergunta 3"];
    const [icon, setIcon] = React.useState("play-outline");
    const [cardtext, setCardtext] = React.useState("cardTitle");
    const [iconColor, setIconColor] = React.useState("")
    function TurnCard(){
        if(icon === "play-outline"){
            setIcon("reload-outline")
            setCardtext("cardQuestion")
        } else {
            setIcon("play-outline")
            setCardtext("cardTitle")
        }
        //close-circle = esqueceu
        //checkmark-circle = lembrou
        //help-circle = quase
    }
    return(
        <li className="card" key={props.index}>
            <h2 className={cardtext}>{props.question}</h2>
            <ion-icon name={icon} className={"md hydrated " + iconColor + " btn"} onClick={TurnCard}></ion-icon>
        </li>
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