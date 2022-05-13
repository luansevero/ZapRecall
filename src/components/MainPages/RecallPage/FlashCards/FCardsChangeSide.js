import turnPic from "../../../../assets/setinha.png"
import React from "react"
export default function FCardsChangeSide({fcIcon, fcIconClass, flashCardBtn, userAnswer, refreshFooter}){
    if(fcIcon === "play-outline"){
        return (<ion-icon name={fcIcon} className={"md hydrated " + fcIconClass} onClick={flashCardBtn}></ion-icon>)
    }if(fcIcon === "setinha"){
        return (<div className="turnContent"><img className="turn" src={turnPic} alt="Resposta" onClick={flashCardBtn}/></div>)
    }if(fcIcon === "buttons"){
        return (
            <section className="recallButtons">
                <button onClick={() => userAnswer("não")}>Não lembrei</button>
                <button onClick={() => userAnswer("quase")}>Quase não lembrei</button>
                <button onClick={() => userAnswer("zap")}>Zap!</button>
            </section>
        )
    } if(fcIcon === "close-circle" || fcIcon === "help-circle" || fcIcon === "checkmark-circle"){
        return (<ion-icon name={fcIcon} class={"md hydrated " + fcIconClass}></ion-icon>)
    }
}