

export function Formatamount(amount) {
    let sign = '+'
    let amountformat = amount

    if (amount < 0 ){
        sign = '-'
        amountformat = amount * (-1) 
    }
    // tiền tệ
    amountformat= new Intl.NumberFormat('vi-VN', 
    { style: 'currency', currency: 'VND' })
    .format(amountformat)
    amountformat= amountformat.substring(0, amountformat.length -2)

   // return `${sign} ${amountformat}`
    return sign + ' ' + amountformat
}

    export  function caltotalamount(datalist) {
        let total = 0
    for (let index = 0; index < datalist.length; index++){
        const data = datalist[index]
        const amount = data.amount

        total = total + amount
    }
   // console.log('total' , total);
    return total
}
// tính % 
export function Ptamount(amount, total) {
    if(!total) {
        return '0%'
    }

    let pt = Math.round((amount/total) * 100)
    if (pt <0){
        pt = pt *(-1)
    }
    return pt + '%'
}