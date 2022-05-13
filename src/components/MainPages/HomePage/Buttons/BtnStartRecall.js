export default function BtnStartRecall({click, startRecall, numberSelected, deck}){
    if(click){
        return (<button className={"startRecall"} onClick={() => startRecall(deck, numberSelected)}>Iniciar Recall!</button>) 
    }
    return (<button className="startRecall off">Iniciar Recall!</button>)
}