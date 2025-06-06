function inverseArray(arr){
    const inv = [];
    for(let i=0;i<arr.length;i++){
        inv[arr[i]]=i
    }
    console.log(inv);   
}

inverseArray([9,2,3,4])