let createNode = (value) => {
    return {
        value,
        next: null
    }
}

let createLinkedList = () => {
    return {
        head: null,
        tail: null,
        length: 0,
        
        push: (value) => {
            const node = createNode(value);

            // jika linkedList kosong
            if (this.head === null) {
                this.head = node;
                this.tail = node;
                this.length += 1;
            } else {
                this.next = node;
                this.tail = node;
                this.length += 1;
            }
            
            return node;
        },
        // pop
        pop: () => {
            // kosong
            if (this.isEmpty()) return null;
            // satu node
            const node = this.tail;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
                this.length = 0;
                
                return node;
            }
            // lebih dari satu node
            let current = this.head;
            let penult;
            
            while(current) {
                if (current.next === this.tail) {
                    penult = current;
                    break;
                }
                current = current.next;
            }
            
            penult.next = null;
            this.tail = penult;
            this.length -= 1;
            
            return node;
        },
        // get
        get: (index) => {
            // list kosong
            if (index < 0 || index > this.length) return null;
            // list item satu
            if (index === 0) return this.head;
            // list item lebih dari satu
            let current = this.head;
            let i = 0;
            while(i < index) {
                current = current.next;
                i += 1;
            }
            
            return current;
        },
        // delete
        delete: (index) => {
            // list kosong
            if (index < 0 || index > this.length) return null;
            // list item satu
            if (index === 0) {
                const deleted = this.head;
                this.head = this.head.next;
                this.length -= 1;

                return deleted;
            }
            // list item lebih dari satu
            let current = this.head;
            let prev;
            let i = 0;

            while(i < index) {
                prev = current;

                current =  current.next;
                i += 1;
            }
            const deleted = current;
            prev.next = current.next;
            this.length -= 1;

            return deleted;
        },
        // isEmpty
        isEmpty: () => {
            return this.length === 0;
        },
        print: () => {
            const values = [];
            let current = this.head;

            while(current) {
                values.push(current.value);
                current = current.next;
            }

            return values.join(" => ");
        }
    }
}

const list = createLinkedList();
const values = ['a', 'b', 'c', 'd'];
const nodes = values.map((val) => {
    list.push(val);
});

// list.pop();

console.log(list.isEmpty());
console.log(list.pop().value);