/* eslint-disable no-loop-func */

import PriorityQueue from './priorityQueue'


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
        this.adjacensyList[vertex2].push({ node: vertex1, weight, color })
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




export default WeightedGraph