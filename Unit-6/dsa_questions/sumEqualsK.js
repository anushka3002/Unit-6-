// Given a sorted array of integers nums and an integer K, return indices of the two numbers such that they add up to K.

// Note: You can assume that the answer always exists

// Sample Input
// array = [2,7,11,15], K = 9
// Sample Output
// [0,1]

var arr=[2,7,11,15]
var k=9;
console.log("anushka")
var left=0;
var res;
var right=arr.length-1;
var sum=0;
while(left<right){
    if((arr[left]+arr[right])==k){
      res=left+" "+right;
      // console.log(res)
      break
    }
    else if((arr[left]+arr[right])>k){
      right--
    }
    else{
      left++
    }
    // console.log(res)
  }
console.log(res)

