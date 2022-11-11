import { useState, useRef} from 'react'
import cls from 'classnames'
import {useDispatch} from 'react-redux'
import { actAddIncome } from '../store/action'
function Formcontrol() {
    const dispatch = useDispatch()
    const refDecs = useRef(null)
    const [formData, setformData]=useState({
        sign: 'inc',
        decs: '',
        amount: ''
    })
    

    
    function onChangeData (e){
        let key =  e.target.name
        let value =  e.target.value
        if(key === 'amount' && value !== ''){
            value = Number(value)
           
        }

        if(value <0 ) {
            return
        }
        

        setformData({
            ...formData,
        [key]: value //truyeền biến thay đổi gtri key
        })
    }

   

    function handSubmit() {
        if (!formData.amount || !formData.decs)
        {
            return
        }
        dispatch(actAddIncome(formData))

        setformData ({
            sign: 'inc',
            decs: '',
            amount: ''
        })
        refDecs.current.focus() // điều khiển trỏ chuột
    }
    function handKeyup(e) {
        
        if (e.key === 'Enter'){
            handSubmit()
        }
    }
    const isShow  = formData.sign === 'exp'
    

    return(
    
        <div className="add">
            <div className="add__container">
                <select className={cls("add__type",{
                    'red-focus': isShow
                })} value={formData.sign} name='sign' 
                onChange={onChangeData}>
                    <option value="inc" >+</option>
                    <option value="exp">-</option>
                </select>
                <input ref={refDecs} type="text" className={cls("add__description",{
                'red-focus': isShow
                })} 
               
                placeholder="Nhập tiêu đề...." 
                name='decs' value={formData.decs} 
                onChange={onChangeData}/>
                <input 
                
                type="number" 
                className={cls("add__value", {'red-focus': isShow
                })} 
                onKeyUp={handKeyup}
                placeholder="Tiền" 
                value={formData.amount} 
                name='amount' 
                onChange={onChangeData}
                />
                <button 
                onClick={handSubmit}
                className={cls("add__btn",{
                        red: isShow
                })}>
                    <i className="ion-ios-checkmark-outline"></i>
                </button>
            </div>
        </div>
        
   
    
    )    
}
export default Formcontrol