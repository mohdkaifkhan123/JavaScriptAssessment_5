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



























JavaScript Assessment Five Explanation And Output Questions
https://docs.google.com/document/d/1Kl5D7jd2B5Tc2qKg0_rfOyR0M7klB9XKpQrYQO5BMJg/edit?usp=sharing
