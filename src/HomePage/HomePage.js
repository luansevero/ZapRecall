import "./style.css"
import logo from "../assets/ZapRecallLogo.png"
import React, { useState } from "react"
import BtnStartRecall from "./Buttons/BtnStartRecall"
import SelectDeck from "./Buttons/SelectDeck"
import InputNumber from "./Buttons/InputNumber"
import DeckSelector from "../RecallPage/Decks/DeckSelector"
export default function HomePage({startRecall}){
   const [deck, setDeck] = React.useState("");
   const [click, setClick] = React.useState(false);
   const [selectClass, setSelectClass] = React.useState("");
   const [numberSelected, setNumberSelected] = React.useState("");
   const [placeholderNumberText, setPlaceholderNumberText] = React.useState("Escolha um deck primeiro");
   const [btnStatus, setBtnStatus] = React.useState(true);
   const limit = DeckSelector(deck).length
    function Verify(verify, unselect){
        if(verify === "deckVerify"){
            setPlaceholderNumberText(`Digite sua meta de zaps : 1 a ${limit}`)
            setBtnStatus(false)
        }
        (verify === "zapVerify") ? setClick(true) : 
        (!verify && unselect === "input") ? setClick(false) : setClick(false);
        if(!verify && unselect === "deck"){
            window.location.reload()
        }
    }
    return(
        <main className="mainPage">
            <img className="zapLogo" src={logo} alt="ZapRecall"/>
            <h1 className="logoTitle">ZapRecall</h1>
            <SelectDeck selectClass={selectClass} setSelectClass={setSelectClass} setDeck={setDeck} Verify={Verify}/>
            <InputNumber setNumberSelected={setNumberSelected} placeholderNumberText={placeholderNumberText} btnStatus={btnStatus} Verify={Verify} limit={limit}/>
            <BtnStartRecall click={click} startRecall={startRecall} numberSelected={numberSelected}/>
        </main>
    )
}