import { Formatamount, Ptamount } from "../store/help"
function Expense({Total,total}) {
    return(
        <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Chi tiêu</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">{Formatamount(Total)}</div>
                    <div className="budget__expenses--percentage">{Ptamount(Total, total)}</div>
                </div>
            </div>
    )
}
export default Expense