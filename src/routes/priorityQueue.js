class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const node = new Node(val, priority)
        this.values.push(node)
        let parent
        let index = this.values.length - 1
        let temp

        while (index > 0) {
            parent = Math.floor((index - 1) / 2)
            if (this.values[parent].priority < this.values[index].priority)
                break

            temp = this.values[parent]
            this.values[parent] = this.values[index]
            this.values[index] = temp
            index = parent
        }
    }

    dequeue() {
        const min = this.values[0]
        const popped = this.values.pop()
        if (this.values.length)
            this.values[0] = popped

        let index = 0
        let child1 = index * 2 + 1
        let child2 = index * 2 + 2

        while (child1 < this.values.length) {
            if (child2 >= this.values.length)
                if (this.values[index].priority > this.values[child1].priority) {
                    this.switch(index, child1)
                    index = child1
                }
                else
                    break

            else {
                let smaller = this.values[child1].priority < this.values[child2].priority ? child1 : child2
                if (this.values[index].priority > this.values[smaller].priority) {
                    this.switch(index, smaller)
                    index = smaller
                }
                else
                    break
            }

            child1 = index * 2 + 1
            child2 = index * 2 + 2

        }

        return min
    }

    switch(i1, i2) {
        let temp
        temp = this.values[i1]
        this.values[i1] = this.values[i2]
        this.values[i2] = temp
    }

    length() {
        return this.values.length
    }
}

export default PriorityQueue