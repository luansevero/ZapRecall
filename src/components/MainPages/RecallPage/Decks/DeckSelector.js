import ReactDeck from "./AllDecks/ReactDeck";
import DLillardDeck from "./AllDecks/DamianLillard";
export default function DeckSelector(deck){
    let selectedDeck = []
    if(deck === "react"){
        selectedDeck = ReactDeck()
    } if(deck === "damianLillard"){
        selectedDeck = DLillardDeck()
    }
    function Shuffle() { 
        return Math.random() - 0.5; 
    }
    selectedDeck.sort(Shuffle)
    return selectedDeck
}