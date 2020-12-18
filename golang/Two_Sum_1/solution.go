package Two_Sum_1

// Assuming input is unsorted
func twoSum(nums []int, target int) []int {
	numsLen := len(nums)
	if numsLen < 2 {
		return []int{}
	}

	numToIndex := make(map[int]int)
	for idx, num := range nums {
		need := target - num
		mIdx, ok := numToIndex[need]
		if ok {
			return []int{mIdx, idx}
		}
		numToIndex[num] = idx
	}

	return []int{}
}
