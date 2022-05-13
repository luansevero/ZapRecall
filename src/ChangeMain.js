import HomePage from "./HomePage/HomePage"
export default function ChangeMains({changePage, startRecall}){
    if(changePage){
        return ""
    } 
    return  <HomePage startRecall={startRecall} />
}