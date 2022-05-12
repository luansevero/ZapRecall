import MainPage from "./MainBodys/WelcomePage"
import RecallPage from "./MainBodys/RecallPage/RecallPage"
export default function ChangeMains({changePage, startRecall}){
    if(changePage){
        return <RecallPage />
    } 
    return  <MainPage startRecall={startRecall} />
}