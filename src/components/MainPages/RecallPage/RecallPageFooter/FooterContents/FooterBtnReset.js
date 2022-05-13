export default function BtnReset({setChangePage}){
    function on(){
        setChangePage(false)
    }
    return(
        <button className="restartRecall" onClick={on}>REINICIAR RECALL</button>
    )
}