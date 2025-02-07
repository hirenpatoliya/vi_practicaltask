function pattern(num){
    let pattern = ""
    for(let i=1;i<=num; i++){
        for(j=1;j<i;j++){
           pattern +=" "
        }
        
        for(k=i;k<=num;k++){
            pattern +="* "
        }
        pattern +="\n"
    }
    
    for(let i= num-1; i>=1;i--){
         for(j=1;j<i;j++){
           pattern +=" "
        }
        
        for(k=i;k<=num;k++){
            pattern +="* "
        }
        pattern +="\n"
    }
    return pattern;
    }
    
    console.log(pattern(6))