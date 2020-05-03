
import data from '../challengeData/data.json'
import WeightedGraph from './weightedGraph'

export default () => {
    const graph = new WeightedGraph()

    // Luodaan pysäkit
    for (const stop of data.pysakit) {
        graph.addVertex(stop)
    }
    
    let keltainen
    let punainen
    let vihreä
    let sininen
    
    // Avustamaan linjastojen alustusta
    const helperObj = {}

    for (const road of data.tiet) {
        helperObj[`${road.mista}${road.mihin}`] = road.kesto
        helperObj[`${road.mihin}${road.mista}`] = road.kesto
    }

    // Alustetaan keltaiset
    for (let i = 0; i < data.linjastot.keltainen.length - 1; i++) {
        keltainen = data.linjastot.keltainen
        graph.addEdge(keltainen[i], keltainen[i + 1], helperObj[`${keltainen[i]}${keltainen[i + 1]}`], 'yellow')
    }

    // ...punaiset
    for (let i = 0; i < data.linjastot.punainen.length - 1; i++) {
        punainen = data.linjastot.punainen
        graph.addEdge(punainen[i], punainen[i + 1], helperObj[`${punainen[i]}${punainen[i + 1]}`], 'red')
    }

    // ...vihreät
    for (let i = 0; i < data.linjastot.vihreä.length - 1; i++) {
        vihreä = data.linjastot.vihreä
        graph.addEdge(vihreä[i], vihreä[i + 1], helperObj[`${vihreä[i]}${vihreä[i + 1]}`], 'green')
    }

    // ...siniset
    for (let i = 0; i < data.linjastot.sininen.length - 1; i++) {
        sininen = data.linjastot.sininen
        graph.addEdge(sininen[i], sininen[i + 1], helperObj[`${sininen[i]}${sininen[i + 1]}`], 'blue')
    }

    return graph
}