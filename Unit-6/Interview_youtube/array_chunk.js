/**
 * Given an array [2, 4, 2, 5, 3, 6, 3] and a size n
 * Chunk the array into smaller size arrays such that no subarray is greater than size n
**/



const chunk = (arr, size) => {      //size=3
    let temp=[];
    result=[];
    count=0;
    for(var i=0;i<arr.length;i++){
        if(count==size){            //i=2
            result.push(temp);      //result=[[2,4,2]]
            temp=[];                    //temp=[]
            count=0; 
        }
        temp.push(arr[i]);        
        count++;                    //count=3
    }

    result.push(temp)
    return result
};



console.log(chunk([2, 4, 2, 5, 3, 6, 3], 3)); // [[2, 4, 2], [5, 3, 6], [3]]
console.log(chunk([2, 4, 2, 5, 3, 6], 3)); // [[2, 4, 2], [5, 3, 6]]