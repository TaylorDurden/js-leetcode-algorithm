/**
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
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const ln = new ListNode(1);
ln.next = new ListNode(1);
ln.next.next = new ListNode(1);
ln.next.next.next = new ListNode(2);
ln.next.next.next.next = new ListNode(2);
ln.next.next.next.next.next = new ListNode(3);

const rlt = deleteDuplicates(ln);
console.log('deleteDuplicates: ', rlt); // [1,2,3]