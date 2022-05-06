var str="anu9shka"

const reverseWords = (str) => {
    var bag="",result="";
    for(var i=0;i<str.length;i++){
        if(+str[i]>=0 && +str[i]<=9){
            result+=bag+str[i]+""
            bag="";
        }
        else{
            bag=str[i]+bag
        }
    }
    // result+=bag
    console.log(result)
};
reverseWords("anu9shka")