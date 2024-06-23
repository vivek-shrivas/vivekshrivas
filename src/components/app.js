let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

const merge = function (nums1, nums2) {
  nums1 = nums1.concat(nums2);
  nums1 = nums1.filter((item) => item !== 0);
  nums1.sort();
    console.log(nums1);
};

merge(nums1, nums2);
