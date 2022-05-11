import React from "react";
export default function Footer(props){
    const allQuestions = props.size;
    const [visibility, setVisibility] = React.useState("none")
    const [qAnswered, setQAnswered] = React.useState(0);
    const [answersIcons, setAnswersIcons] = React.useState([]);
    const [resultText, setResultText] = React.useState("");
    const [resultTitle, setResultTitle] = React.useState("")
    const [emojiName, setEmojiName] = React.useState("")
    
    return(
        <div className="footer">
            <div className="resultContainer none">
                <img className="" src={"assets/" + emojiName + ".png"} alt={emojiName}></img>
                <h2 className="result">{resultTitle}</h2>
            </div>
            <p className="resultText none">{resultText}</p>
            <h2 className="progress">{qAnswered}/{allQuestions} CONCLUÍDOS</h2>
            <div className="progressIcons none">
                {answersIcons.map(({iconName, iconClass}, index) =>
                    <ion-icon name={iconName} className={iconClass} key={index}></ion-icon>
                )}
            </div>
        </div>
    )
}