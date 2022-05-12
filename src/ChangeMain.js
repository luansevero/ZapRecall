import MainPage from "./MainBodys/WelcomePage"
export default function ChangeMains({changePage, startRecall}){
    if(changePage){
        return ""
    } 
    return  <MainPage startRecall={startRecall} />
}