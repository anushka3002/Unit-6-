var arr=[2,4,2,5,3,6,3]


const chunk=(arr,size)=>{
    let count=0;
    let ans=[];
    let newarr=[]

    for(let i=0;i<arr.length;i++){
        if(count===size){
            ans.push(newarr)
            newarr=[]
            count=0;
        }
        if(arr[i]!=undefined){
            newarr.push(arr[i])
            count++;
        }
    }
    if(newarr.length!=0){
        ans.push(newarr)
    }
    console.log(ans)
}
chunk(arr,3)