export default function Icons({answersIcons}){
    return(
        <div className="progressIcons">
        {answersIcons.map((i, index) =>
            <ion-icon name={i.fcIcon} class={i.fcIconClass} key={index}></ion-icon>
        )}
        </div>
    )
}