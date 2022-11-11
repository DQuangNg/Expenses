import { Formatamount } from "../store/help"
 

function Income  ({Total}) {
    return (

<div className="budget__income clearfix">
                <div className="budget__income--text">Thu Nhập</div>
                <div className="right">
                    <div className="budget__income--value"> { Formatamount(Total)}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>
 )
}

export default Income