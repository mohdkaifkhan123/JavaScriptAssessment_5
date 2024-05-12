//Composition in js
function add(a){
    return a+2
}
function subtract(a){
    return a-3
}
function multiply(a){
    return a*3
}

const compose=(...functions)=>{
    return(args)=>{
     return   functions.reduceRight((arg,fn)=>fn(arg),args);
    }
}

const solve=compose(add,subtract,multiply)

console.log(solve(6))





//Polyfill for array flat method
const arr=[[1,2],[1,3],[[4]]]


const result=[]

function polyfillFlatArray(arr){
    arr.forEach((item)=>{
        if(Array.isArray(item))
        polyfillFlatArray(item)
        else
        result.push(item)
    })
    return result
}

console.log(polyfillFlatArray(arr))



//Polyfill for promise.all

const d=(time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(time)
        },time)
    })
}
const arr=[d(1000),d(2000),d(3000)]
console.log(arr)

const polyfillPromiseAll=(arr)=>{
    const o=[]
    return new Promise((resolve,reject)=>{
        arr.forEach((promise,index)=>{
            promise.then((data)=>{
                o[index]=data
                if(index===arr.length-1)
                resolve(o)
            }).catch((error)=>{
                reject(error)
            })
        })
    })
}
polyfillPromiseAll(arr).then((data)=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})


//Calculate count of total arrays
const arr=[[1,2],[1,3],[[[4]]]]


const result=[]
let c=1;
function polyfillFlatArray(arr){
    arr.map((item)=>{
        if(Array.isArray(item))
        {
        c++
        polyfillFlatArray(item)
        }
        
    })
    return c
}

console.log(polyfillFlatArray(arr))


























JavaScript Assessment Five Explanation And Output Questions
https://docs.google.com/document/d/1Kl5D7jd2B5Tc2qKg0_rfOyR0M7klB9XKpQrYQO5BMJg/edit?usp=sharing
