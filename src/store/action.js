
// action type
export const ACT_ADD_INCOME = 'ACT_ADD_INCOME'
export const ACT_DELETE_INCOME = 'ACT_DELETE_INCOME'

// action creator
export function actAddIncome  (data) {
    return{
        type: ACT_ADD_INCOME,
        payload: {
            data
        }
    }
  }

export function actDeleteIcome(id) {
    console.log('actDeleteIcome', id);
    return {
        type: ACT_DELETE_INCOME,
        payload: {
            id
        }
    }
}