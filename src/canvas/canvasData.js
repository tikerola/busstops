

// koordinaattikerroin alkuperäisestä kuvakoosta poikkeaville kuville
const RELATIVE_SIZE = 0.7

export const stops = {
    'A':
    {
        point: [97, 198]
    },
    'B':
    {
        point: [206, 175]
    },
    'C':
    {
        point: [23, 233]
    },
    'D':
    {
        point: [153, 231]
    },
    //
    'E':
    {
        point: [67, 297]
    },
    'F':
    {
        point: [116, 324]
    },
    'G':
    {
        point: [173, 345]
    },
    'H':
    {
        point: [168, 423]
    },
    'I':
    {
        point: [113, 361]
    },
    'J':
    {
        point: [56, 329]
    },
    'K':
    {
        point: [476, 239]
    },
    'L':
    {
        point: [476, 185]
    },
    'M':
    {
        point: [442, 151]
    },
    'N':
    {
        point: [413, 84]
    },
    'O':
    {
        point: [350, 21]
    },
    'P':
    {
        point: [255, 60]
    },
    'Q':
    {
        point: [342, 72]
    },
    'R':
    {
        point: [379, 159]
    }
   
}

// pysäkkien välisten teiden koordinaatit
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
    },

    // 

    'CA':
    {
        end: [125, 291],
        start: [47, 324]
    },
    'DC': {
        end: [49, 331],
        start: [203, 333]
    },
    'EC': {
        end: [42, 345],
        start: [87, 410]
    },
    'BD': {
        end: [228, 320],
        start: [286, 261]
    },
    'AB': {
        end: [279, 252],
        start: [156, 281]
    },
    'ED': {
        end: [206, 341],
        start: [109, 413]
    },
    'FE': {
        end: [110, 431],
        start: [150, 454]
    },
    'GF': {
        end: [180, 467],
        start: [234, 488]
    },
    'HG': {
        end: [248, 508],
        start: [242, 588]
    },
    'IH': {
        end: [230, 592],
        start: [171, 526]
    },
    'JI': {
        end: [147, 507],
        start: [92, 477]
    },
    'RD': {
        end: [233, 326],
        start: [525, 231]
    },
    'NR': {
        end: [547, 210],
        start: [582, 135]
    },
    'QR': {
        end: [533, 212],
        start: [495, 118]
    },
    'ON': {
        end: [577, 109],
        start: [511, 41]
    },
    'QO': {
        end: [498, 42],
        start: [491, 87]
    },
    'PO': {
        end: [485, 36],
        start: [379, 78]
    },
    'QP': {
        end: [379, 87],
        start: [473, 100]
    },
    'NQ': {
        end: [504, 106],
        start: [573, 118]
    },
    'ME': {
        end: [112, 417],
        start: [616, 222]
    },
    'KG': {
        end: [263, 485],
        start: [665, 347]
    },
    'LK': {
        end: [680, 324],
        start: [679, 280]
    },
    'ML': {
        end: [668, 253],
        start: [642, 227]
    },
    'NM': {
        end: [624, 202],
        start: [595, 135]
    }
}

for (const key in canvasData) {
    canvasData[key].start[0] *= RELATIVE_SIZE
    canvasData[key].start[1] *= RELATIVE_SIZE
    canvasData[key].end[0] *= RELATIVE_SIZE
    canvasData[key].end[1] *= RELATIVE_SIZE
}

export default canvasData