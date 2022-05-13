export default function BtnStartRecall({click, startRecall, numberSelected}){
    if(click){
        return (<button className={"startRecall"} onClick={() => startRecall(numberSelected)}>Iniciar Recall!</button>) 
    }
    return (<button className="startRecall off">Iniciar Recall!</button>)
}