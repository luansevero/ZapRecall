import React from "react";
import LogoHeader from "./Header";
import DeckSelector from "./Decks/DeckSelector";
import FlashCards from "./FlashCards/FCardsRender";
import FCardsChangeSide from "./FlashCards/FCardsChangeSide";

export default function RecallPage(){
    const deck = "react"; // Para quando for pegar outros decks
    const deckSelected = []
    DeckSelector().forEach(function(e){
        deckSelected.push({...e, btn:refreshFooter})
    })
    console.log(deckSelected)
    
    function refreshFooter(fcIcon, fcIconClass){
        return ""
    }

    return(
        <main className="recallPage">
            <LogoHeader />
            <ul>
                {deckSelected.map((flashcard, index) =>
                    <FlashCards index={index} question={flashcard.question} answer={flashcard.answer} refreshFooter={flashcard.btn} />
                )}
            </ul>
        </main>
    )
}
