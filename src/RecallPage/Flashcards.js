import React from "react";
export default function FlashCards({index, question, answer}){
    const [fcText, setFcText] = React.useState(`Pergunta ${index + 1}`);
    const [fcQuestion, setFcQuestion] = React.useState(question);
    const [fcAnswer, setFcAnswer] = React.useState(answer);
    const [fcClass, setFcClass] = React.useState("");
    const [fcTextClass, setFcTextClass] = React.useState("flashcardTitle");
    const [fcIcon, setFcIcon] = React.useState("play-outline");
    const [fcIconClass, setFcIconClass] = React.useState("");
    function FlashCardBtn(){
        if(fcIcon === "play-outline"){
            setFcText(fcQuestion);
            setFcClass("turned")
            setFcIcon("setinha")
        } if(fcIcon === "setinha"){
            setFcText(fcAnswer);
            setFcIcon("buttons");
        }
    }
    function UserAnswer(click){
        if(click === "não lembrei"){
            setFcIcon("")
            setFcIconClass("forgot")
            setFcTextClass("")
        }
    }
    return(
        <li className={"flashcard " + fcClass} key={index}>
            <h2 className={fcClass}>{fcText}</h2>
            <FlashCardSide fcIcon={fcIcon} fcIconClass={fcIconClass} FlashCardBtn={FlashCardBtn} />
        </li>
    )
}
function FlashCardSide({index, fcText, fcQuestion, fcAnswer, fcClass, fcTextClass, fcIcon, fcIconClass, FlashCardBtn}){
    if(fcIcon === "play-outline"){
        return (<ion-icon name={fcIcon} className={"md hydrated " + fcIconClass} onClick={FlashCardBtn}></ion-icon>)
    }if(fcIcon === "setinha"){
        return <div className="turnContent"><img className="turn" src="assets/setinha.png" alt="Resposta" onClick={FlashCardBtn}/></div>
    }if(fcIcon === "buttons"){
        return (
            <section className="recallButtons">
                <button className="">Não lembrei</button>
                <button className="">Quase não lembrei</button>
                <button className="">Zap!</button>
            </section>
        )
    } if(fcIcon === "" || fcIcon === "" || fcIcon === ""){
        return (<ion-icon name={fcIcon} className={"md hydrated " + fcIconClass}></ion-icon>)
    }
}
