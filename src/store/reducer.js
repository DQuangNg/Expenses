import {v4 as uuidv4} from 'uuid'
import { ACT_DELETE_INCOME , ACT_ADD_INCOME} from './action'

function getDataLocalStroge() {
    try {
        const dataFromLocalStorge = localStorage.getItem('listBudget') || '[]' // trả về 1 string 
        return JSON.parse(dataFromLocalStorge)
    } catch (err) {
        return []
    }
}
const initState = {
    isShow: true,
    listIncome: getDataLocalStroge() // string về object
}

function reducer(state = initState , action) {
    switch (action.type) {
        case ACT_DELETE_INCOME:
           // Xoa 1 item trong array 
       // const idDelete = action.payload.id
       // const dataIncomeafter = state.listIncome.filter(dataitem => {
            // xoas di phan tu = voi idDelete
            //return dataitem.id !== idDelete
       // })
    
        // return {
        //  ...state,
        //  listIncome: dataIncomeafter
           
        // };
        return {
         ...state,
         listIncome: state.listIncome.filter(dataitem => {
        return dataitem.id !== action.payload.id
         }) 
        };


        case ACT_ADD_INCOME:
            const data = action.payload.data
            return {
                ...state,
                listIncome: [
                    ...state.listIncome,
                    {
                        id: uuidv4(),
                        decs: data.decs,
                        amount: data.sign === 'inc' ? data.amount : data.amount * (-1)
                    }
                ]
            }
        default:
            return state
    }
   
}
export default reducer