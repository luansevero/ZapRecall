import LogoHeader from "./Header";
import FlashCards from "./Flashcards";
import DeckSelector from "./Decks/DeckSelector";
import Footer from "./Footer";
export default function RecallPage(){
    const deck = "react" // Para quando for pegar outros decks
    return(
        <div className="recallPage">
            <LogoHeader />
            <ul>
                {DeckSelector().map((card, index) =>
                    <FlashCards index={index} question={card.question} answer={card.answer}/>
                )}
            </ul>
            <Footer size={DeckSelector().length} userAnswer="0"/>
        </div>
    )
}
