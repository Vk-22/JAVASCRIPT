let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

let mycreateddate = new Date(2026,1,12)
console.log(mycreateddate.toDateString())



let TimeStamp = Date.now()
console.log(TimeStamp)
console.log(Math.floor(Date.now()/1000))

