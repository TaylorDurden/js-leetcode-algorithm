/**
 * You are given two 'non-empty' linked lists representing two non-negative integers. The digits are stored in 'reverse order', and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 * https://leetcode.cn/problems/add-two-numbers
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let l = new ListNode(null);
  console.log('l: ', l);
  const preHead = l;
  let carry = 0;

  while (l1 || l2) {
    let rlt = 0;
    if (l1) {
      rlt += l1.val;
      console.log('l1: ', l1);
      l1 = l1.next;
      console.log('l11: ', l1);
    }
    if (l2) {
      rlt += l2.val;
      console.log('l2: ', l2);
      l2 = l2.next;
      console.log('l22: ', l2);
    }
    rlt += carry;
    carry = rlt > 9 ? 1 : 0;
    l.next = new ListNode(rlt % 10);
    console.log('l.next: ', l.next);
    l = l.next;
    console.log('l: ', l);
  }
  if (carry) {
    l.next = new ListNode(1);
  }
  console.log('preHead: ', preHead);
  console.log('preHead.next: ', preHead.next);
  return preHead.next;
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
const l1 = new ListNode(2)
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// Output: [7,0,8]
const r = addTwoNumbers(l1, l2);
console.log('addTwoNumbers(l1, l2): ', r); //