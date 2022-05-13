import DeckSelector from "../../RecallPage/Decks/DeckSelector";

export default function InputNumber({setNumberSelected, placeholderNumberText, btnStatus, Verify, limit}){
    return (
        <input type="number" className="numberInput" id="" placeholder={placeholderNumberText} disabled={btnStatus} onChange={(e) =>{
            const selectedNumber = e.target.value;
            if(e.target.value.length > 0 && e.target.value <= limit){
            {setNumberSelected(selectedNumber)}
            Verify("zapVerify")
            } else {
                Verify(false, "input")
            }
        }}/>
    )
}