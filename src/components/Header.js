import Total from "./Total"
import Income from "./Income"
import Expense from "./Expense"

import useBudgetdata from "../hooks/usebudgetdata"
function Header() {

    const {
        totalamounts,
        totalamountexs,
        Totalamount
    } = useBudgetdata()
//     const listdata = useSelector(state => state.listIncome)
    
//     // lập từng phần tử ss điều kiện
// const listincome = listdata.filter(itemdata => itemdata.amount > 0  )
// const listexpense = listdata.filter(itemdata => itemdata.amount < 0  )
// const totalamounts = caltotalamount(listincome) 
// const totalamountexs = caltotalamount(listexpense) 

// const Totalamount = totalamounts + totalamountexs


    return(
        <div className="top">
            <div className="budget">
                <div className="budget__title" style={{ fontSize: 50 }}>
                    TÀI CHÍNH<span className="budget__title--month"></span>
                </div>
                <Total Total={Totalamount}/>
                <Income Total={totalamounts} />
                <Expense Total={totalamountexs} total={totalamounts} />
            </div>           
        </div>
    )
    
}
export default Header