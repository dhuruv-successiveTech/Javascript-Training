// Q4. Write a program to convert given string to upperCase OR lowerCase. 

// Ans.  
    function toUpperCase(str){
        // Uppercase
        let newStr=''
        for(let i=0;i<str.length;i++){
            let ch=str.charCodeAt(i);
            if(ch>=97 && ch<=122){
                newStr+=String.fromCharCode(ch-32);
            }else{
                newStr+=String.fromCharCode(ch)
            }
        }
        return newStr
    }

    function toLowerCase(str){
        // lowercase
        let newStr=''
        for(let i=0;i<str.length;i++){
            let ch=str.charCodeAt(i);
            if(ch>=65 && ch<=90)
            {
                newStr+=String.fromCharCode(ch+32);
            }
            else{
                newStr+=String.fromCharCode(ch)
            }
        }
        return newStr
    }

    console.log(toLowerCase('abcAbcDabBcc'));
    console.log(toUpperCase('abcAbcDabBcc'));
    