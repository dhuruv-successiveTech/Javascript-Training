// Q7. Write a program to find index of duplicate elements in an array

// Ans. 
    function indexOfDuplicates(arr){
        let duplicates=[];
        let set=[];
        let flag=true;
        for(let i=0;i<arr.length;i++){
            if(set.indexOf(arr[i])==-1){
                set.push(arr[i]);
                flag=false;
            }
            else{
                flag=true;
            }
            if(flag)
                duplicates.push(i);
            
        }
        console.log(duplicates);
        
    }

    indexOfDuplicates([1,2,3,4,9,9,6,6,6])