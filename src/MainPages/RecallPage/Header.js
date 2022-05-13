import logo from "../../assets/ZapRecallLogo.png"
export default function LogoHeader(){
    return(
        <div className="logoHeader">
            <img className="zapLogo" src={logo} alt="ZapRecall"/>
            <h1 className="logoTitle">ZapRecall</h1>
        </div>
    )
}