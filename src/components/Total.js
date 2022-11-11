import { Formatamount } from "../store/help"

function Total({Total}) {
    return(
        
        <div className="budget__value">{Formatamount(Total)}</div>
    )
}
export default Total