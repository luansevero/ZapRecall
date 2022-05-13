import React from "react";
import ChangeMainsPages from "./components/ChangeMainPages"
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
            <ChangeMainsPages changePage={changePage} startRecall={startRecall} selectedDeck={selectedDeck} recallLevel={recallLevel} setChangePage={setChangePage}/>
        )
} //Tava dando um erro quando eu colocava em ZapRecall(), então preferi não fazer o component, pois essa parte estaria nele