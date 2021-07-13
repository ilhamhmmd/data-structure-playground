let createQueue = () => {
    const queue = [];

    return {
        // enqueue
        enqueue: (value) => {
            queue.unshift(value);
        },
        // dequeue
        dequeue: () => {
            queue.pop();
        },
        // peek
        peek: () => {
            return queue[queue.length - 1];
        },
        // size
        size: () => {
            return queue.length;
        }
    }
}

const q = createQueue();
q.enqueue('Create script for data structure course');
q.enqueue('Create code example for data structure course');
q.enqueue('Record data structure course');
q.enqueue('Vacation');

q.dequeue();
q.dequeue();
q.dequeue();

console.log(q.peek());