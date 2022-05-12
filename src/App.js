import React from "react";
import ChangeMains from "./ChangeMain";
export default function ZapRecall(){
    return (
        <>
            <VisiblePage />
        </>
    )
}
function VisiblePage(){
    const [changePage, setChangePage] = React.useState(false);

    function startRecall(){
        setChangePage(true)
    }

        return(
            <ChangeMains changePage={changePage} startRecall={startRecall}/>
        )
}