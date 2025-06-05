// Q2. Write a program to display following output as shown in figure

//(i)   // 1
        // 2 3
        // 4 5 6
        // 7 8 9 10


        let count = 1;
        for(let i = 1;i <= 4;i++){
            let pattern = '';
            for(let j=1;j<=i;j++){
                pattern+=count+' ';
                count++;
            }
            console.log(pattern);   
        }

//(ii)  // 1
        // 2 2
        // 3 3 3
        // 4 4 4 4

// Ans 
        for(let i=1;i<=4;i++){
            let pattern='';
            for(let j=1;j<=i;j++){
                pattern+=i+' ';
            }
            console.log(pattern);
        }

//(iii)  // 1 2 3 4 5
        // 1 2 3 4
        // 1 2 3
        // 1 2
        // 1
        // 1 2
        // 1 2 3
        // 1 2 3 4
        // 1 2 3 4 5

// Ans 
        for(let i=5;i>=1;i--){
            let pattern='';
            for(let j=1;j<=i;j++){
                pattern+=j+' ';
            }
            console.log(pattern);
        }
        for(let i=2;i<=5;i++){
            let pattern='';
            for(let j=1;j<=i;j++){
                pattern+=j+' ';
            }
            console.log(pattern);
        }