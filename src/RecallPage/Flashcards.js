import React from "react";
export default function FlashCards({index, question, answer}){
    const fcIndex = React.useState(`Pergunta ${index + 1}`)
    const [fcText, setFcText] = React.useState(fcIndex);
    const [fcQuestion, setFcQuestion] = React.useState(question);
    const [fcAnswer, setFcAnswer] = React.useState(answer);
    const [fcClass, setFcClass] = React.useState("");
    const [fcTextClass, setFcTextClass] = React.useState("flashcardTitle");
    const [fcIcon, setFcIcon] = React.useState("play-outline");
    const [fcIconClass, setFcIconClass] = React.useState("normal");
    function FlashCardBtn(){
        if(fcIcon === "play-outline"){
            setFcText(fcQuestion);
            setFcClass("turned")
            setFcTextClass("flashcardQuestion")
            setFcIcon("setinha")
        } if(fcIcon === "setinha"){
            setFcText(fcAnswer);
            setFcIcon("buttons");
        }
    }
    function UserAnswer(click){
        if(click === "não"){
            setFcIcon("close-circle")
            setFcIconClass("forgoten")
            setFcTextClass("forgoten answred")
        }
        if(click === "quase"){
            setFcIcon("help-circle")
            setFcIconClass("almost")
            setFcTextClass("almost answred")
        }
        if(click === "zap"){
            setFcIcon("checkmark-circle")
            setFcIconClass("remembered")
            setFcTextClass("remembered answred")
        }
        setFcText(fcIndex)
        setFcClass("")
    }
    return(
        <li className={"flashcard " + fcClass} key={index}>
            <h2 className={fcTextClass}>{fcText}</h2>
            <FlashCardSide fcIcon={fcIcon} fcIconClass={fcIconClass} FlashCardBtn={FlashCardBtn} UserAnswer={UserAnswer}/>
        </li>
    )
}
function FlashCardSide({fcIcon, fcIconClass, FlashCardBtn, UserAnswer}){
    if(fcIcon === "play-outline"){
        return (<ion-icon name={fcIcon} className={"md hydrated " + fcIconClass} onClick={FlashCardBtn}></ion-icon>)
    }if(fcIcon === "setinha"){
        return <div className="turnContent"><img className="turn" src="assets/setinha.png" alt="Resposta" onClick={FlashCardBtn}/></div>
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
