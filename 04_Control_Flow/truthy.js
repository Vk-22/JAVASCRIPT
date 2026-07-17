// falsy values
// false, 0, -0, "", null, undefined, NaN, BigInt On

// truty values
// true, "0", " ", [], {}, functions(){}

const Obj = {}

if (Object.keys(Obj).length === 0){
    console.log("Object is empty")
}