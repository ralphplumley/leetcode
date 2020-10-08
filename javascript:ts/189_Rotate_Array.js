// Brute Force
Time: O(n*k) - all the numbers shifted by one step, k times
Space: O(1) - no extra space / array used

var rotate = function(nums, k) {
  let i = k
  while (i > 0) {
    let el = nums.pop()
    nums.unshift(el)
    i--
  }
};

// Reverse Hack
Time: O(n) - n elements reversed a total of 3 times
Space: O(1)

var rotate = function(nums, k) {
  k %= nums.length
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

var reverse = function(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
