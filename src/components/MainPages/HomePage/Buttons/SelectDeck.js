import DeckSelector from "../../RecallPage/Decks/DeckSelector";
export default function SelectDeck({selectClass, setDeck, setSelectClass, Verify}){
    return(
        <select className={"selectDeck " + selectClass} id="" placeholder="Escolha seu Deck" onChange={(e) =>{
            const selectedDeck = e.target.value;
            if(selectedDeck !== ""){
                {setDeck(selectedDeck)}
                {setSelectClass("deckSelected")}
                Verify("deckVerify")
            } else {
                {setDeck(selectedDeck)}
                {setSelectClass("")}
                Verify(false, "deck")
            }
            
        }}>
            <option value="">Escolha seu Deck</option>
            <option value="react">React Deck</option>
            <option value="damianLillard">Damian Lillard</option>
        </select>
    )
}