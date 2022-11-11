import Item from "./Item"

function Totalexpense({datalist, total}) {    
    return(
        <div className="expenses">
                <h2 className="expenses__title">Tổng chi tiêu</h2>

                <div className="expenses__list">

                { 
                    datalist.map(itemdata => <Item data={itemdata} total={total} key={itemdata.id} />)
                } 


                </div>
            </div>
    )
}
export default Totalexpense