import Item from "./Item"

function Totalincome({datalist }) {
    return(
        <div className="income">
                <h2 className="icome__title">Tổng thu nhập</h2>
                <div className="income__list">

               { 
                    datalist.map(itemdata => <Item data={itemdata}   key={itemdata.id} />)
               } 

                </div>
            </div>
    )
}
export default Totalincome