const myPromise = new Promise((resolve,reject)=>{
    let age = 17;
    if(age>=18){
        resolve("Eligible for vote.")
    }else{
        reject("Not eligible for vote.")
    }
})
const checkeligibility = async()=>{
    try{
        const msg = await myPromise;
        console.log(msg);
    }
    catch(error)
    {
        console.log(error);
    }
    // const msg = myPromise;
    // console.log(msg);
}
checkeligibility();
// console.log(myPromise);
//myPromise
    // .then((msg)=>console.log(msg))
    // .catch((error)=>console.log(error))