//returns key value indexing position if it exixts in an array
function Search(arr,key)
{
    for(let i=0;i<arr.length;i++)
    {
         if(key==arr[i])
         {
            return i
         }
    }
    return "not found"
}
let arr=[1,2,3,4,5,6,7,8]
let key=10
console.log("The Index Position Of key is : ",Search(arr,key))