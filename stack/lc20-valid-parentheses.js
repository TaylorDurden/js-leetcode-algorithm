/**
 * 20. 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 *
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 示例 1：

 * 输入：s = "()"
 * 输出：true
 * 示例 2：
 
 * 输入：s = "()[]{}"
 * 输出：true
 * 示例 3：
 
 * 输入：s = "(]"
 * 输出：false
 * 示例 4：
 
 * 输入：s = "([)]"
 * 输出：false
 * 示例 5：
 
 * 输入：s = "{[]}"
 * 输出：true
 
 * 提示：
 * 1 <= s.length <= 104
 * s 仅由括号 '()[]{}' 组成

 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/valid-parentheses
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const isValid = (str) => {
  let stack = [];
  const leftArr = ['(', '[', '{'];
  const matchArr = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ];
  const matchMethod = (start, end) => {
    return (
      (start === ')' && end === '(') ||
      (start === ']' && end === '[') ||
      (start === '}' && end === '{')
    );
  };
  for (let i = 0; i < str.length; i++) {
    const start = str[i];
    if (leftArr.includes(start)) {
      stack.push(start);
    } else {
      const end = stack[stack.length - 1];
      if (matchMethod(start, end)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
