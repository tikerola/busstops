/* eslint-disable no-loop-func */
import React from 'react'
import canvasData from './canvasData'
import graph from '../routes/model'
import isBusStopPressed from './isBusStopPressed'


const BUS_DIMENSIONS_X = - 20
const BUS_DIMENSIONS_Y = - 58

class Canvas extends React.Component {

    state = {
        start: '',
        stop: ''
    }

    canvasRef = React.createRef()
    backgroundImageRef = React.createRef()
    busRef = React.createRef()

    componentDidMount() {

        const canvas = this.canvasRef.current

        const ctx = canvas.getContext("2d")

        const background = new Image()
        this.backgroundImageRef.current = background
        background.src = './assets/images/kokeilu.png'

        const bus = new Image()
        this.busRef.current = bus
        bus.src = './assets/images/bus1.png'

        background.onload = () => {
            ctx.drawImage(background, 0, 0)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.start === '' && this.state.stop === '') {
            this.animate()
            this.props.setDrawBusses(false)
        }
        else {
            if(this.state.start && this.state.stop) {
                
                const data = graph.shortestPath(this.state.start, this.state.stop)
                this.props.setData(data)
                this.setState({
                    start: '',
                    stop: ''
                })
            }
        }
    }

    async animate() {
        const { path } = this.props
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")

        ctx.drawImage(this.backgroundImageRef.current, 0, 0)

        // Animoidaan 'bussin' eteneminen kartalla
        await this.animateBus(ctx)

        // Lopuksi piirretään kartalle yhtenäinen reittiviiva
        setTimeout(() => {
            for (let i = 0; i < path.length - 2; i++) {
                this.drawLine(ctx, path[i].vertex, path[i + 1].vertex, path[i].color)
            }
            const x = `${path[path.length - 2].vertex}${path[path.length - 1].vertex}`
            const y = `${path[path.length - 2].vertex}${path[path.length - 1].vertex}`

            const endpointX = canvasData[x].end[0]
            const endpointY = canvasData[y].end[1]
            ctx.drawImage(this.busRef.current, endpointX + BUS_DIMENSIONS_X, endpointY + BUS_DIMENSIONS_Y)

            // Piirtämisen jälkeen annetaan UI:lle lupa näyttää reittitiedot väribusseineen
            this.props.setDrawBusses(true)
        }, 500)
    }

    animateBus = (ctx) => {
        const { path } = this.props

        return new Promise((resolve, reject) => {
            for (let i = 0; i < path.length - 1; i++) {
                setTimeout(() => {
                    this.drawAnimatedLine(ctx, path[i].vertex, path[i + 1].vertex, path[i].color)
                    if (i === path.length - 2)
                        resolve('success')
                }, (i + 1) * 500)
            }
        })
    }

    drawLine(ctx, v1, v2, color) {
        ctx.beginPath();
        ctx.lineWidth = 4
        ctx.strokeStyle = color
        const index = `${v1}${v2}`

        ctx.moveTo(canvasData[index].start[0], canvasData[index].start[1]);
        ctx.lineTo(canvasData[index].end[0], canvasData[index].end[1]);
        ctx.stroke();
    }

    drawAnimatedLine = (ctx, v1, v2, color) => {
        ctx.beginPath();
        ctx.lineWidth = 4
        ctx.strokeStyle = color
        let index = `${v1}${v2}`

        let animCounter = 500

        const deltaX = (canvasData[index].end[0] - canvasData[index].start[0]) / animCounter
        const deltaY = (canvasData[index].end[1] - canvasData[index].start[1]) / animCounter

        let prevStartX = canvasData[index].start[0]
        let prevStartY = canvasData[index].start[1]

        while (animCounter--) {
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
                ctx.drawImage(this.backgroundImageRef.current, 0, 0)
                ctx.moveTo(prevStartX, prevStartY);
                ctx.lineTo(prevStartX + deltaX, prevStartY + deltaY);
                ctx.stroke();

                ctx.drawImage(this.busRef.current, prevStartX + BUS_DIMENSIONS_X, prevStartY + BUS_DIMENSIONS_Y)
                prevStartX = prevStartX + deltaX
                prevStartY = prevStartY + deltaY
            }, 2)
        }
    }

    handleMouseDown = e => {

        const x = e.clientX - this.canvasRef.current.getBoundingClientRect().left
        const y = e.clientY - this.canvasRef.current.getBoundingClientRect().top

        const letter = isBusStopPressed(x, y)
        if (letter) {
            if (!this.state.start)
                this.setState({
                    start: letter
                })
            else if (!this.state.stop)
                this.setState({
                    stop: letter
                })
        }
    }

    render() {
        return (
            <div style={{ overflow: 'hidden', borderRadius: '4px', height: '445px' }}>
                <canvas ref={this.canvasRef} width={500} height={450} onMouseDown={this.handleMouseDown} />
            </div>
        )
    }
}

export default React.memo(Canvas)