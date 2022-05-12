import React from "react"
export default function FCardsChangeSide({fcIcon, fcIconClass, FlashCardBtn, UserAnswer, refreshFooter}){
    if(fcIcon === "play-outline"){
        return (<ion-icon name={fcIcon} className={"md hydrated " + fcIconClass} onClick={FlashCardBtn}></ion-icon>)
    }if(fcIcon === "setinha"){
        return (<div className="turnContent"><img className="turn" src="assets/setinha.png" alt="Resposta" onClick={FlashCardBtn}/></div>)
    }if(fcIcon === "buttons"){
        return (
            <section className="recallButtons">
                <button onClick={() => UserAnswer("não")}>Não lembrei</button>
                <button onClick={() => UserAnswer("quase")}>Quase não lembrei</button>
                <button onClick={() => UserAnswer("zap")}>Zap!</button>
            </section>
        )
    } if(fcIcon === "close-circle" || fcIcon === "help-circle" || fcIcon === "checkmark-circle"){
        return (<ion-icon name={fcIcon} class={"md hydrated " + fcIconClass}></ion-icon>)
    }
}