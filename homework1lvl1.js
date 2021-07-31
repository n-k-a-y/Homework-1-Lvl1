//xndir 4
function oneTwo(str) {
    let result = "";
    for(let i=0; i <str.length - 2; i += 3)
    {
        result = result + str.substring(i+1,i+3) + str.charAt(i);
    }
    return result;
  }

// xndir 2
function findLongestWord(str) {
    debugger
    let arr = str.split(' ' && '-')   
     let res = arr[0]
    let strLength = arr[0].length
    for (let i = 1; i < arr.length; i++) {
   
        if(arr[i].length > strLength ) {
                res = arr[i]
            } 
        }
    return res 
}