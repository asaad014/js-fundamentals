var twoSum = function(nums, target) {
    const newArr = []
    for(let i = 0 ; i < nums.length ; i++)
    {
        for(let j=0 ; j < nums.length ; j++)
        {
            if(i == j)continue;
            if((nums[i] + nums[j]) == target){
                    newArr.push(i)
                    newArr.push(j)
                    return newArr

            }

        }
        
    }
}
