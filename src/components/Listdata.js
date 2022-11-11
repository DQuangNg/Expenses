
import  Totalexpense  from "./Totalexpense"
import Totalincome from "./Totalincome"
// import {useSelector} from 'react-redux'
// import {caltotalamount} from '../store/help'
import useBudgetdata from "../hooks/usebudgetdata"

function List() {

  const {
    listincome,
    listexpense,
    totalamounts
  } = useBudgetdata()
// const listdata = useSelector(state => state.listIncome)
    
//     // lập từng phần tử ss điều kiện
// const listincome = listdata.filter(itemdata => itemdata.amount > 0  )
// const listexpense = listdata.filter(itemdata => itemdata.amount < 0  )
// const totalamounts = caltotalamount(listincome) 
    return(
        <div className="container clearfix">
        <Totalincome datalist = {listincome}  />
        <Totalexpense datalist = {listexpense}  total={totalamounts}/>
        </div>
    )
}
export default List