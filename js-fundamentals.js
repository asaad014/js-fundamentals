// var twoSum = function(nums, target) {
//     const newArr = []
//     for(let i = 0 ; i < nums.length ; i++)
//     {
//         for(let j=0 ; j < nums.length ; j++)
//         {
//             if(i == j)continue;
//             if((nums[i] + nums[j]) == target){
//                     newArr.push(i)
//                     newArr.push(j)
//                     return newArr

//             }

//         }

//     }
// }

var twoSum = function (nums, target) {
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {

    const complete = target - nums[i];
    if(m.has(complete))
    {
        return [i , m.get(complete)]
    }

    m.set(nums[i] , i)
  }
};

console.log(twoSum([1,2,3,4], 6))
