import HomePage from "./MainPages/HomePage/HomePage";
import RecallPage from "./MainPages/RecallPage/RecallPage";
export default function ChangeMains({changePage, startRecall, selectedDeck, recallLevel}){
    if(changePage){
        return <RecallPage selectedDeck={selectedDeck} recallLevel={recallLevel}/>
    } 
    return  <HomePage startRecall={startRecall} />
}