import ReactDeck from "./ReactDeck";
export default function DeckSelector(){
    const selectedDeck = ReactDeck()
    console.log(selectedDeck)
    function Shuffle() { 
        return Math.random() - 0.5; 
    }
    selectedDeck.sort(Shuffle)
    return selectedDeck
}