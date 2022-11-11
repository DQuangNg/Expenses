import {useSelector} from 'react-redux'
import {caltotalamount} from '../store/help'
import {useEffect} from 'react'

function useBudgetdata() {
   

        const listdata = useSelector(state => state.listIncome)  
        const listincome = listdata.filter(itemdata => itemdata.amount > 0  )
        const listexpense = listdata.filter(itemdata => itemdata.amount < 0  )
        const totalamounts = caltotalamount(listincome) 
        const totalamountexs = caltotalamount(listexpense) 
        const Totalamount = totalamounts + totalamountexs
        // Lưu data khi thay dổi
        useEffect(() => {
          localStorage.setItem('listBudget', JSON.stringify(listdata))
        }, [listdata])        
    return {
        listincome,
        listexpense,
        totalamounts,
        totalamountexs,
        Totalamount
    }

}
export default useBudgetdata
//const listdata = useSelector(state => state.listIncome)
    
//     // lập từng phần tử ss điều kiện
// const listincome = listdata.filter(itemdata => itemdata.amount > 0  )
// const listexpense = listdata.filter(itemdata => itemdata.amount < 0  )
// const totalamounts = caltotalamount(listincome) 