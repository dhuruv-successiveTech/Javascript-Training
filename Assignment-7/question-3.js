// Q3. Convert a callback-based API to a Promise-based API 
// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// }

const fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        const check = true;
        setTimeout(()=>{
            if(check){
                resolve('Data fetched successfully');
            }
            else{
                reject(null);
            }
        },1000);
    })
}

fetchData()
.then((data)=>console.log(data))
.catch((err)=>console.log(err));
