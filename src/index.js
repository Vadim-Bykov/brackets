module.exports = function check(str, bracketsConfig) {
    const stack = [];
    let last;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '{' || str[i] == '1' || str[i] == '3' || str[i] == '5') {
            stack.push(str[i]);
        } else if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '2' || str[i] == '4' || str[i] == '6') {
            if (stack.length) {
                last = stack[stack.length - 1];
                if ((last == '[' && str[i] == ']') || (last == '(' && str[i] == ')') || (last == '{' && str[i] == '}') || (last == '1' && str[i] == '2') || (last == '3' && str[i] == '4') || (last == '5' && str[i] == '6')) {
                    stack.pop();
                }
            } else return false;
        } else if ((str[i] == '|' || str[i] == '7' || str[i] == '8') && !stack.includes(str[i])) {
            stack.push(str[i]);
            // console.log(stack)
        } else if ((str[i] == '|' || str[i] == '7' || str[i] == '8') && stack.includes(str[i])) {
            last = stack[stack.length - 1];
            // console.log(last)
            if (last == str[i]) {
                stack.pop();
            }
        }
    }
    // console.log(stack)
    return (!stack.length);
}
