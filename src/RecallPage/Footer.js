import React from "react";
export default function Footer({size, qAnswered, answersIcons}){
     if(size === qAnswered){
        return(
            <div className="footer">
                <Result answersIcons={answersIcons} size={size} qAnswered={qAnswered}/>
                <h2 className="progress margin">{qAnswered}/{size} CONCLUÍDOS</h2>
                <Icons answersIcons={answersIcons}/>
            </div>
        )
    }
    if(qAnswered === 0){
        return(
            <div className="footer">
                <h2 className="progress">{qAnswered}/{size} CONCLUÍDOS</h2>
            </div>
        )
    } else {
        return(
            <div className="footer">
                <h2 className="progress margin">{qAnswered}/{size} CONCLUÍDOS</h2>
                <Icons answersIcons={answersIcons}/>
            </div>
        )
    }
}
function Result({answersIcons, size, qAnswered}){
    let emojiName;
    let resultTitle;
    let resultText;
    if(size === qAnswered){
        if(answersIcons.filter((e) => e.fcIconClass === "forgoten").length > 0){
            resultText = "Ainda faltam alguns... Mas não desanime!";
            resultTitle = "Putz...";
            emojiName = "sad";
        } else {
            resultText = "Você não esqueceu de nenhum flashcard!";
            resultTitle = "Parabéns!";
            emojiName = "party";
        }
    }
    return(
        <>
            <div className="resultContainer">
                <img className="" src={"assets/" + emojiName + ".png"} alt={emojiName}></img>
                <h2 className="result">{resultTitle}</h2>
            </div>
            <p className="resultText ">{resultText}</p>
        </>
    )
}
function Icons({answersIcons}){
    return(
        <div className="progressIcons">
        {answersIcons.map((i, index) =>
            <ion-icon name={i.fcIcon} class={i.fcIconClass} key={index}></ion-icon>
        )}
        </div>
    )
}
function RetornaNada(){

    return true
}