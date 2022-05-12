export default function MainPage({startRecall}){
    return(
        <main className="mainPage">
            <img className="zapLogo" src="assets/ZapRecallLogo.png" alt="ZapRecall"/>
            <h1 className="logoTitle">ZapRecall</h1>
            <button className="startRecall" onClick={startRecall}>Iniciar Recall!</button>
        </main>
    )
}