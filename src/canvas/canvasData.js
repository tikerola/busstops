

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
        end: [49, 325]
    },
    'CD': {
        start: [50, 332],
        end: [203, 333]
    },
    'CE': {
        start: [42, 345],
        end: [87, 410]
    },
    'DB': {
        start: [229, 320],
        end: [286, 261]
    },
    'BA': {
        start: [279, 253],
        end: [156, 281]
    },
    'DE': {
        start: [207, 340],
        end: [110, 413]
    },
    'EF': {
        start: [112, 433],
        end: [151, 455]
    },
    'FG': {
        start: [181, 468],
        end: [234, 488]
    },
    'GH': {
        start: [248, 508],
        end: [243, 588]
    },
    'HI': {
        start: [230, 592],
        end: [171, 526]
    },
    'IJ': {
        start: [147, 507],
        end: [95, 478]
    },
    'DR': {
        start: [234, 327],
        end: [525, 232]
    },
    'RN': {
        start: [547, 210],
        end: [582, 135]
    },
    'RQ': {
        start: [535, 212],
        end: [496, 118]
    },
    'NO': {
        start: [578, 110],
        end: [511, 41]
    },
    'OQ': {
        start: [498, 42],
        end: [491, 87]
    },
    'OP': {
        start: [485, 36],
        end: [379, 79]
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
        start: [112, 418],
        end: [616, 223]
    },
    'GK': {
        start: [264, 488],
        end: [665, 347]
    },
    'KL': {
        start: [681, 324],
        end: [681, 280]
    },
    'LM': {
        start: [668, 253],
        end: [642, 227]
    },
    'MN': {
        start: [625, 202],
        end: [597, 135]
    },

    // 

    'CA':
    {
        end: [125, 291],
        start: [49, 325]
    },
    'DC': {
        end: [50, 332],
        start: [203, 333]
    },
    'EC': {
        end: [42, 345],
        start: [87, 410]
    },
    'BD': {
        end: [229, 320],
        start: [286, 261]
    },
    'AB': {
        end: [279, 253],
        start: [156, 281]
    },
    'ED': {
        end: [207, 340],
        start: [110, 413]
    },
    'FE': {
        end: [112, 433],
        start: [151, 455]
    },
    'GF': {
        end: [181, 468],
        start: [234, 488]
    },
    'HG': {
        end: [248, 508],
        start: [243, 588]
    },
    'IH': {
        end: [230, 592],
        start: [171, 526]
    },
    'JI': {
        end: [147, 507],
        start: [95, 478]
    },
    'RD': {
        end: [234, 327],
        start: [525, 232]
    },
    'NR': {
        end: [547, 210],
        start: [582, 135]
    },
    'QR': {
        end: [535, 212],
        start: [496, 118]
    },
    'ON': {
        end: [578, 110],
        start: [511, 41]
    },
    'QO': {
        end: [498, 42],
        start: [491, 87]
    },
    'PO': {
        end: [485, 36],
        start: [379, 79]
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
        end: [112, 418],
        start: [616, 223]
    },
    'KG': {
        end: [264, 488],
        start: [665, 347]
    },
    'LK': {
        end: [681, 324],
        start: [681, 280]
    },
    'ML': {
        end: [668, 253],
        start: [642, 227]
    },
    'NM': {
        end: [625, 202],
        start: [597, 135]
    },


}

for (const key in canvasData) {
    canvasData[key].start[0] *= RELATIVE_SIZE
    canvasData[key].start[1] *= RELATIVE_SIZE
    canvasData[key].end[0] *= RELATIVE_SIZE
    canvasData[key].end[1] *= RELATIVE_SIZE
}

export default canvasData