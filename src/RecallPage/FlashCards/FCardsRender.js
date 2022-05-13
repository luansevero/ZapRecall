import React from "react";
import FCardsChangeSide from "./FCardsChangeSide";
export default function FlashCards({index, question, answer, refreshFooter}){
    const fcQIndex = React.useState(`Pergunta ${index + 1}`)
    const [fcText, setFcText] = React.useState(`Pergunta ${index + 1}`);
    const fcQuestion = React.useState(question);
    const fcAnswer = React.useState(answer);
    const [fcClass, setFcClass] = React.useState("");
    const [fcTextClass, setFcTextClass] = React.useState("flashcardTitle");
    const [fcIcon, setFcIcon] = React.useState("play-outline");
    const [fcIconClass, setFcIconClass] = React.useState("normal");
    function flashCardBtn(){
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

    function userAnswer(click){
        if(click === "não"){
            setFcIcon("close-circle")
            setFcIconClass("forgoten")
            setFcTextClass("forgoten answred")
            refreshFooter("close-circle", "forgoten")
        }
        if(click === "quase"){
            setFcIcon("help-circle")
            setFcIconClass("almost")
            setFcTextClass("almost answred")
            refreshFooter("help-circle", "almost")
        }
        if(click === "zap"){
            setFcIcon("checkmark-circle")
            setFcIconClass("remembered")
            setFcTextClass("remembered answred")
            refreshFooter("checkmark-circle", "remembered")
        }
        setFcText(fcQIndex)
        setFcClass("")
        
    }

    return(
        <li className={"flashcard " + fcClass} key={index}>
            <h2 className={fcTextClass}>{fcText}</h2>
            <FCardsChangeSide fcIcon={fcIcon} fcIconClass={fcIconClass} flashCardBtn={flashCardBtn} userAnswer={userAnswer} refreshFooter={refreshFooter} />
        </li>
    )
}