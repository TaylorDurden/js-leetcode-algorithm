const a = { val: 'a'};
const b = { val: 'b'};
const c = { val: 'c'};
const d = { val: 'd'};

a.next = b;
b.next = c;
c.next = d;

// 遍历链表
let p = a;
while(p) {
  console.log(p.val);
  p = p.next;
}

// 插入值
// 在c和d之间插入e
const e = { val: 'e' };
c.next = e;
e.next = d;

// 删除e
c.next = d;