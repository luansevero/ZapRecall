import React from "react";
import Result from "./FooterContents/FooterResult";
import Icons from "./FooterContents/FooterIcons";
import BtnReset from "./FooterContents/FooterBtnReset";
export default function Footer({size, qAnswered, answersIcons, recallLevel, setChangePage}){
     if(size === qAnswered){
        return(
            <div className="footer margin">
                <div className="content">
                <Result answersIcons={answersIcons} size={size} qAnswered={qAnswered} recallLevel={recallLevel} />
                <h2 className="progress margin">{qAnswered}/{size} CONCLUÍDOS</h2>
                <Icons answersIcons={answersIcons}/>
                <BtnReset setChangePage={setChangePage} />
                </div>
            </div>
        )
    }
    if(qAnswered === 0){
        return(
            <div className="footer">
                <div className="content">
                    <h2 className="progress">{qAnswered}/{size} CONCLUÍDOS</h2>
                </div>
            </div>
        )
    } else {
        return(
            <div className="footer">
                <div className="content">
                    <h2 className="progress margin">{qAnswered}/{size} CONCLUÍDOS</h2>
                    <Icons answersIcons={answersIcons}/>
                </div>
            </div>
        )
    }
}

