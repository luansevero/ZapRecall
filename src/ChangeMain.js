import HomePage from "./MainPages/HomePage/HomePage";
import RecallPage from "./MainPages/RecallPage/RecallPage";
export default function ChangeMains({changePage, setChangePage, startRecall, selectedDeck, recallLevel}){
    if(changePage){
        return <RecallPage selectedDeck={selectedDeck} recallLevel={recallLevel} setChangePage={setChangePage} />
    } 
    return  <HomePage startRecall={startRecall} />
}