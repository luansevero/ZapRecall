import React from "react";
import party from "../../assets/party.png"
import sad from "../../assets/sad.png"
export default function Footer({size, qAnswered, answersIcons, recallLevel, setChangePage}){
     if(size === qAnswered){
        return(
            <div className="footer">
                <Result answersIcons={answersIcons} size={size} qAnswered={qAnswered} recallLevel={recallLevel} />
                <h2 className="progress margin">{qAnswered}/{size} CONCLUÍDOS</h2>
                <Icons answersIcons={answersIcons}/>
                <BtnReset setChangePage={setChangePage} />
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
function Result({answersIcons, size, qAnswered, recallLevel}){
    let emojiName;
    let resultTitle;
    let resultText;
    if(size === qAnswered){
        if(answersIcons.filter((e) => e.fcIconClass === "forgoten").length > (size - recallLevel)){
            resultText = "Ainda faltam alguns... Mas não desanime!";
            resultTitle = "Putz...";
            emojiName = sad
        } else {
            resultText = "Você não esqueceu de nenhum flashcard!";
            resultTitle = "Parabéns!";
            emojiName = party
        }
    }
    return(
        <>
            <div className="resultContainer">
                <img className="" src={emojiName} alt={emojiName}></img>
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
function BtnReset({setChangePage}){
    function on(){
        setChangePage(false)
    }
    return(
        <button className="restartRecall" onClick={on}>REINICIAR RECALL</button>
    )
}