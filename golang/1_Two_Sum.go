package main

import (
	"fmt"
)

func main() {
	fmt.Println("main")
	var nums = []int{1, 2, 3, 4}
	twoSum(nums, 3)
}

func twoSum(nums []int, target int) []int {
	lookup := make(map[int]int)
	for i, v := range nums {
		j, ok := lookup[-v]
		println("j: ", j)
		println("v: ", v)
		println("ok: ", ok)

		lookup[v-target] = i
		if ok {
			return []int{j, i}
		}
	}
	return []int{}
}
