/* eslint-disable no-loop-func */
import React from 'react'
import canvasData from './data'

const BUS_DIMENSIONS_X = - 20
const BUS_DIMENSIONS_Y = - 62

class Canvas extends React.Component {

    canvasRef = React.createRef()
    backgroundImageRef = React.createRef()
    busRef = React.createRef()

    componentDidMount() {

        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")

        const background = new Image()
        this.backgroundImageRef.current = background
        background.src = './assets/images/kartta070origtrans.png'

        const bus = new Image()
        this.busRef.current = bus
        bus.src = './assets/images/bus.png'

        background.onload = () => {
            ctx.drawImage(background, 0, 0)
        }
    }

    async animate() {
        const { path } = this.props
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")

        ctx.drawImage(this.backgroundImageRef.current, 0, 0)
        
        await this.animateBus(ctx)
        console.log('tänne päästään')
        for (let i = 0; i < path.length - 2; i++) {
            this.drawLine(ctx, path[i].vertex, path[i + 1].vertex, path[i].color)
        }

    }

    componentDidUpdate(prevProps, prevState) {
        this.animate()
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
        ctx.lineWidth = 2
        ctx.strokeStyle = color
        const index = `${v1}${v2}`

        ctx.moveTo(canvasData[index].start[0], canvasData[index].start[1]);
        ctx.lineTo(canvasData[index].end[0], canvasData[index].end[1]);
        ctx.stroke();
    }

    drawAnimatedLine = (ctx, v1, v2, color) => {
        ctx.beginPath();
        ctx.lineWidth = 2
        ctx.strokeStyle = color
        const index = `${v1}${v2}`
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

    render() {
        return (
            <div style={{ overflow: 'hidden', borderRadius: '4px', height: '445px' }}>
                <canvas ref={this.canvasRef} width={500} height={450} />
            </div>
        )
    }
}

export default Canvas