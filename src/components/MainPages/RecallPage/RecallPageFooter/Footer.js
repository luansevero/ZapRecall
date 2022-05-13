import React from "react";
import Result from "./FooterContents/FooterResult";
import Icons from "./FooterContents/FooterIcons";
import BtnReset from "./FooterContents/FooterBtnReset";
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

