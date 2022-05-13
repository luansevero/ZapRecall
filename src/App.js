import React from "react";
import ChangeMains from "./ChangeMain";
export default function ZapRecall(){
    return (
        <>
            <VisiblePage />
        </>
    )
}
function VisiblePage(){
    const [changePage, setChangePage] = React.useState(false);
    const [selectedDeck, setSelectedDeck] = React.useState("");
    const [recallLevel, setRecallLevel] = React.useState("");
    
    function startRecall(deck, numberSelected){
        setChangePage(true)
        setSelectedDeck(deck)
        setRecallLevel(numberSelected)
    }

        return(
            <ChangeMains changePage={changePage} startRecall={startRecall} selectedDeck={selectedDeck} recallLevel={recallLevel}/>
        )
}