
const RELATIVE_SIZE = 0.7

const canvasData = {
    'AC':
    {
        start: [125, 291],
        end: [47, 324]
    },
    'CD': {
        start: [49, 331],
        end: [203, 333]
    },
    'CE': {
        start: [42, 345],
        end: [87, 410]
    },
    'DB': {
        start: [228, 320],
        end: [286, 261]
    },
    'BA': {
        start: [279, 252],
        end: [156, 281]
    },
    'DE': {
        start: [206, 309],
        end: [109, 382]
    },
    'EF': {
        start: [110, 431],
        end: [150, 454]
    },
    'FG': {
        start: [180, 467],
        end: [234, 488]
    },
    'GH': {
        start: [246, 507],
        end: [241, 587]
    },
    'HI': {
        start: [230, 592],
        end: [171, 526]
    },
    'IJ': {
        start: [147, 507],
        end: [92, 477]
    },
    'DR': {
        start: [233, 326],
        end: [525, 231]
    },
    'RN': {
        start: [547, 210],
        end: [582, 135]
    },
    'RQ': {
        start: [533, 212],
        end: [495, 118]
    },
    'NO': {
        start: [577, 109],
        end: [511, 41]
    },
    'OQ': {
        start: [498, 42],
        end: [491, 87]
    },
    'OP': {
        start: [485, 36],
        end: [379, 78]
    },
    'PQ': {
        start: [379, 87],
        end: [473, 100]
    },
    'QN': {
        start: [504, 106],
        end: [573, 118]
    },
    'EM': {
        start: [110, 418],
        end: [616, 222]
    },
    'GK': {
        start: [263, 485],
        end: [504, 352]
    },
    'KL': {
        start: [530, 333],
        end: [569, 298]
    },
    'LM': {
        start: [590, 273],
        end: [622, 230]
    },
    'MN': {
        start: [624, 202],
        end: [595, 135]
    }
}

for (const key in canvasData) {
    
    canvasData[key].start[0] *= RELATIVE_SIZE
    canvasData[key].start[1] *= RELATIVE_SIZE
    canvasData[key].end[0] *= RELATIVE_SIZE
    canvasData[key].end[1] *= RELATIVE_SIZE

}

export default canvasData