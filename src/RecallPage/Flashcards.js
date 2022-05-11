import React from "react";
export default function FlashCards({index, question, answer}){
    const [fcText, setFcText] = React.useState(`Pergunta ${index + 1}`);
    const [fcQuestion, setFcQuestion] = React.useState(question);
    const [fcAnswer, setFcAnswer] = React.useState(answer);
    const [fcClass, setFcClass] = React.useState("flashcardTitle");
    const [fcIcon, setFcIcon] = React.useState("play-outline");
    const [fcIconClass, setFcIconClass] = React.useState("");
    function FlashCardBtn(){
        if(fcIcon === "play-outline"){
            setFcText(fcQuestion);
        } if(fcIcon === "reload-outline"){
            setFcText(fcAnswer);
        }
    }
    return(
        <li className="flashcard" key={index}>
            <h2 className={fcClass}>{fcText}</h2>
            <ion-icon name={fcIcon} className={"md hydrated " + fcIconClass + " btn"} onClick={FlashCardBtn}></ion-icon>
        </li>
    )
}