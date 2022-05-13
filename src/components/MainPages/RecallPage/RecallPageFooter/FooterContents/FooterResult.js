import party from "../../../../../assets/party.png"
import sad from "../../../../../assets/sad.png"
export default function Result({answersIcons, size, qAnswered, recallLevel}){
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