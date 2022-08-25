/**
 * https://leetcode.cn/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, nextNode) {
  this.val = val === undefined ? 0 : val;
  this.next = nextNode === undefined ? null : nextNode;
}
const reverseLinkedlist = function (head) {
  let curr = head;
  let prev = null;
  while (curr) {
    console.log('circle:', curr && curr.val, prev && prev.val);
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  console.log('final: ', curr && curr.val, prev && prev.val);
  return prev;
};
const ln5 = new ListNode(5, null);
const ln4 = new ListNode(4, ln5);
const ln3 = new ListNode(3, ln4);
const ln2 = new ListNode(2, ln3);
const ln1 = new ListNode(1, ln2);
console.log('--------------');
console.log('ln1:', ln1);
console.log('ln1.next:', ln1.next);
console.log('--------------');

const head = ln1;
const r_ln1 = reverseLinkedlist(head);
console.log('--------------');
console.log('r_ln1:', r_ln1);
console.log('r_ln1.next:', r_ln1.next);
console.log('r_ln1.next.next:', r_ln1.next.next);
console.log('r_ln1.next.next.next:', r_ln1.next.next.next);
console.log('r_ln1.next.next.next.next:', r_ln1.next.next.next.next);
console.log('r_ln1.next.next.next.next.next:', r_ln1.next.next.next.next.next);
console.log('--------------');
console.log('ln1:', ln1);
console.log('ln1.next:', ln1.next);
console.log('--------------');
console.log('ln2:', ln2);
console.log('ln2.next:', ln2.next);
console.log('--------------');
