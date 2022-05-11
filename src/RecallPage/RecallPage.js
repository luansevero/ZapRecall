import LogoHeader from "./Header";
import FlashCards from "./Flashcards";
import DeckSelector from "./Decks/DeckSelector";
export default function RecallPage(){
    const deck = "react" // Para quando for pegar outros decks
    return(
        <div className="recallPage">
            <LogoHeader />
            <ul>
                {DeckSelector().map((card, index) =>
                    <FlashCards index={index} question={card.question} answer={card.question}/>
                )}
            </ul>
        </div>
    )
}
