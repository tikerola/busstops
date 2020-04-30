/* eslint-disable no-loop-func */
import data from '../data/data.json'

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


class WeightedGraph {
    constructor() {
        this.adjacensyList = {}
        this.queue = new PriorityQueue()
    }

    addVertex(vertex) {
        if (!this.adjacensyList[vertex])
            this.adjacensyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight, color) {
        this.adjacensyList[vertex1].push({ node: vertex2, weight, color })
    }

    shortestPath(start, finish) {
        const distances = {}
        const previous = {}
        let smallest
        let path = []
        let pathWithColor = []

        for (const vertex in this.adjacensyList) {

            previous[vertex] = null
            
            if (vertex === start) {
                distances[vertex] = 0
                this.queue.enqueue(vertex, 0)
            }
            else {
                distances[vertex] = Infinity
                this.queue.enqueue(vertex, Infinity)
            }
        }

        
        while(this.queue.length() > 0) {
            smallest = this.queue.dequeue().val
           
            if (smallest === finish) {
                let vertex = finish
                while(vertex) {
                    path.unshift(vertex)
                    vertex = previous[vertex]
                }

                let prevColor = undefined
                let color = undefined
                for(let i = 0; i < path.length; i++) {
                    color = this.getEdgeColor(path[i], path[i + 1], prevColor)
                    pathWithColor.push({ vertex: path[i], color})
                    prevColor = color
                }

                return { pathWithColor, distance: distances[finish] }
            }
                

           
            this.adjacensyList[smallest].forEach(v => {
                let candidate = distances[smallest] + v.weight
                
                
                if (candidate < distances[v.node]) {
                    distances[v.node] = candidate
                    previous[v.node] = smallest
                    this.queue.enqueue(v.node, candidate)
                }
            });
        }

        return null
    }

    getEdgeColor(v1, v2, prevColor) {
        let returnColor = []
        for(const vertex of this.adjacensyList[v1]) {
            if (vertex.node === v2)
                returnColor.push(vertex.color)
        }

        if(returnColor.includes(prevColor))
            return prevColor

        return returnColor[0]
    }
}

const graph = new WeightedGraph()



for (const stop of data.pysakit) {
    graph.addVertex(stop)
}


const helperObj = {}

for (const road of data.tiet) { 
    helperObj[`${road.mista}${road.mihin}`] = road.kesto
    helperObj[`${road.mihin}${road.mista}`] = road.kesto
}

// Alustetaan keltaiset
let keltainen
for (let i = 0; i < data.linjastot.keltainen.length - 1; i++) {
    keltainen = data.linjastot.keltainen
    graph.addEdge(keltainen[i], keltainen[i + 1], helperObj[`${keltainen[i]}${keltainen[i + 1]}`], 'yellow')
}
let punainen
for (let i = 0; i < data.linjastot.punainen.length - 1; i++) {
    punainen = data.linjastot.punainen
    graph.addEdge(punainen[i], punainen[i + 1], helperObj[`${punainen[i]}${punainen[i + 1]}`], 'red')
}
let vihreä
for (let i = 0; i < data.linjastot.vihreä.length - 1; i++) {
    vihreä = data.linjastot.vihreä
    graph.addEdge(vihreä[i], vihreä[i + 1], helperObj[`${vihreä[i]}${vihreä[i + 1]}`], 'green')
}
let sininen
for (let i = 0; i < data.linjastot.sininen.length - 1; i++) {
    sininen = data.linjastot.sininen
    graph.addEdge(sininen[i], sininen[i + 1], helperObj[`${sininen[i]}${sininen[i + 1]}`], 'blue')
}


console.log(graph.adjacensyList)



// console.log(helperObj, 'piii')

// for (const road of data.tiet) {
    

//     graph.addEdge(road.mista, road.mihin, road.kesto)
// }





export default graph