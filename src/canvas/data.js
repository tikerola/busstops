

// koordinaattikerroin alkuperäisestä kuvakoosta poikkeaville kuville
const RELATIVE_SIZE = 0.7

// täysikokoisen kuvan pysäkkien koordinaatit
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
        start: [206, 341],
        end: [109, 413]
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
        start: [248, 508],
        end: [242, 588]
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
        start: [112, 417],
        end: [616, 222]
    },
    'GK': {
        start: [263, 485],
        end: [665, 347]
    },
    'KL': {
        start: [680, 324],
        end: [679, 280]
    },
    'LM': {
        start: [668, 253],
        end: [642, 227]
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