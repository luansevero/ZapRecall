import ReactDeck from "./AllDecks/ReactDeck";
export default function DeckSelector(){
    const selectedDeck = ReactDeck()
    function Shuffle() { 
        return Math.random() - 0.5; 
    }
    selectedDeck.sort(Shuffle)
    return selectedDeck
}