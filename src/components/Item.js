import { Formatamount, Ptamount } from "../store/help"
import {useDispatch} from 'react-redux'
import { actDeleteIcome } from "../store/action"

function Item({data, total}) {
    const dispatch = useDispatch() // dispatch nhan 1 action
    const {id, decs, amount} = data

    function handDelete() {
        const action = actDeleteIcome(id)
        dispatch(action)
        //dispatch(actDeleteIcome(id))
    }
    return(
        <div className="item clearfix">
                        <div className="item__description">{decs}</div>
                        <div className="right clearfix">
                            <div className="item__value">{Formatamount(amount)}</div>
                            
                                 {
                                    amount < 0 && <div className="item__percentage">{Ptamount(amount, total)}</div>
                                 }
                            
                            <div className="item__delete">
                                <button className="item__delete--btn" onClick={handDelete} >
                                    <i className="ion-ios-close-outline"></i>
                                </button>
                            </div>
                        </div>
                    </div>
    )
}
export default Item