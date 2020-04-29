import React from 'react'
import canvasData from './data'

class Canvas extends React.Component {
    state = {
        showImage: false
    }

    canvasRef = React.createRef()

    drawLine = (ctx, v1, v2, color) => {
        ctx.beginPath();
        ctx.lineWidth=3
        ctx.strokeStyle=color
        const index = `${v1}${v2}`
        
        const deltaX = canvasData[index].end[0] - canvasData[index].start[0]
        const deltaY = canvasData[index].end[1] - canvasData[index].start[1]

        ctx.moveTo(canvasData[index].start[0], canvasData[index].start[1]);
        ctx.lineTo(canvasData[index].end[0], canvasData[index].end[1]);
        ctx.stroke();
    }

   

    componentDidMount() {
        const canvas = this.canvasRef.current
        const ctx = canvas.getContext("2d")
        const img = new Image()
        img.src = './assets/images/kartta.png'

        const { path } = this.props


        img.onload = () => {
            ctx.drawImage(img, 0, 0)

            for(let i = 0; i < path.length - 1; i++) {
                setTimeout(() => this.drawLine(ctx, path[i].vertex, path[i + 1].vertex, path[i].color), (i + 1) * 1000)
            }
            
        }
    }
    render() {
        return (
            <div style={{ overflow: 'hidden' }}>
                <canvas ref={this.canvasRef} width={640} height={600} />

            </div>
        )
    }
}

export default Canvas