let createStack = () => {
    let array = [];
    return {
        // push
        push: (item) => {
            array.push(item);
        },
        // pop
        pop: () => {
            array.pop();
        },
        // peek
        peek: () => {
            return array[array.length - 1];
        },
        // size
        size: () => {
            return array.length;
        }
    }
}

const bookStack = createStack();
bookStack.push('The Effective Engineer');
bookStack.push('The Pragmatic Programmer');
bookStack.push('Start With Why');

console.log(bookStack.peek());
bookStack.pop();
bookStack.pop();
console.log(bookStack.peek())
console.log(bookStack.size())