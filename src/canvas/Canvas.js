/* eslint-disable no-loop-func */
import React from 'react'
import canvasData from './data'

class Canvas extends React.Component {
    state = {
        showImage: false
    }

    canvasRef = React.createRef()
    imageRef = React.createRef()

    componentDidMount() {

        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")
        const img = new Image()
        this.imageRef.current = img
        img.src = './assets/images/kartta070.png'

        img.onload = () => {
            ctx.drawImage(img, 0, 0)
        }
    }

    animate() {
        const { path } = this.props
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")

        console.log('fuck')

        ctx.drawImage(this.imageRef.current, 0, 0)
        for (let i = 0; i < path.length - 1; i++) {
            setTimeout(() => this.drawLine(ctx, path[i].vertex, path[i + 1].vertex, path[i].color), (i + 1) * 500)
        }

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('animoidaan', this.props.path)
        this.animate()

    }

    drawLine = (ctx, v1, v2, color) => {
        ctx.beginPath();
        ctx.lineWidth = 3
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
                ctx.moveTo(prevStartX, prevStartY);
                ctx.lineTo(prevStartX + deltaX, prevStartY + deltaY);
                ctx.stroke();
                prevStartX = prevStartX + deltaX
                prevStartY = prevStartY + deltaY
            }, 2)

        }
    }

    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <canvas ref={this.canvasRef} width={664} height={633} />

            </div>
        )
    }
}

export default Canvas