// Q1.  Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

// Ans.  
    function removeDuplicateCharacter(str){
        let newStr='';
        let set='';
        for(let i=0;i<str.length;i++){
            if(set.indexOf(str[i])==-1){
                newStr+=str[i];
                set+=str[i];
            }
        }
        console.log(newStr);    

    }
    removeDuplicateCharacter("Hello Yellow")