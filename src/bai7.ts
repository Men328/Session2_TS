function twoSum(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};

    for (let i: number = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }

    return [];
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); 

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); 