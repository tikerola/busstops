import {stops as vertices} from './canvasData'

const RADIUS = 10

export default (x, y) => {

    if (x >= vertices['A'].point[0] - RADIUS && x <= vertices['A'].point[0] + RADIUS &&
        y >= vertices['A'].point[1] - RADIUS && y <= vertices['A'].point[1] + RADIUS)
        return 'A'

    else if (x >= vertices['B'].point[0] - RADIUS && x <= vertices['B'].point[0] + RADIUS &&
        y >= vertices['B'].point[1] - RADIUS && y <= vertices['B'].point[1] + RADIUS)
        return 'B'

    else if (x >= vertices['C'].point[0] - RADIUS && x <= vertices['C'].point[0] + RADIUS &&
        y >= vertices['C'].point[1] - RADIUS && y <= vertices['C'].point[1] + RADIUS)
        return 'C'


    else if (x >= vertices['D'].point[0] - RADIUS && x <= vertices['D'].point[0] + RADIUS &&
        y >= vertices['D'].point[1] - RADIUS && y <= vertices['D'].point[1] + RADIUS)
        return 'D'


    else if (x >= vertices['E'].point[0] - RADIUS && x <= vertices['E'].point[0] + RADIUS &&
        y >= vertices['E'].point[1] - RADIUS && y <= vertices['E'].point[1] + RADIUS)
        return 'E'


    else if (x >= vertices['F'].point[0] - RADIUS && x <= vertices['F'].point[0] + RADIUS &&
        y >= vertices['F'].point[1] - RADIUS && y <= vertices['F'].point[1] + RADIUS)
        return 'F'


    else if (x >= vertices['G'].point[0] - RADIUS && x <= vertices['G'].point[0] + RADIUS &&
        y >= vertices['G'].point[1] - RADIUS && y <= vertices['G'].point[1] + RADIUS)
        return 'G'

    else if (x >= vertices['H'].point[0] - RADIUS && x <= vertices['H'].point[0] + RADIUS &&
        y >= vertices['H'].point[1] - RADIUS && y <= vertices['H'].point[1] + RADIUS)
        return 'H'

    else if (x >= vertices['I'].point[0] - RADIUS && x <= vertices['I'].point[0] + RADIUS &&
        y >= vertices['I'].point[1] - RADIUS && y <= vertices['I'].point[1] + RADIUS)
        return 'I'

    else if (x >= vertices['J'].point[0] - RADIUS && x <= vertices['J'].point[0] + RADIUS &&
        y >= vertices['J'].point[1] - RADIUS && y <= vertices['J'].point[1] + RADIUS)
        return 'J'

    else if (x >= vertices['K'].point[0] - RADIUS && x <= vertices['K'].point[0] + RADIUS &&
        y >= vertices['K'].point[1] - RADIUS && y <= vertices['K'].point[1] + RADIUS)
        return 'K'

    else if (x >= vertices['L'].point[0] - RADIUS && x <= vertices['L'].point[0] + RADIUS &&
        y >= vertices['L'].point[1] - RADIUS && y <= vertices['L'].point[1] + RADIUS)
        return 'L'

    else if (x >= vertices['M'].point[0] - RADIUS && x <= vertices['M'].point[0] + RADIUS &&
        y >= vertices['M'].point[1] - RADIUS && y <= vertices['M'].point[1] + RADIUS)
        return 'M'

    else if (x >= vertices['N'].point[0] - RADIUS && x <= vertices['N'].point[0] + RADIUS &&
        y >= vertices['N'].point[1] - RADIUS && y <= vertices['N'].point[1] + RADIUS)
        return 'N'

    else if (x >= vertices['O'].point[0] - RADIUS && x <= vertices['O'].point[0] + RADIUS &&
        y >= vertices['O'].point[1] - RADIUS && y <= vertices['O'].point[1] + RADIUS)
        return 'O'

    else if (x >= vertices['P'].point[0] - RADIUS && x <= vertices['P'].point[0] + RADIUS &&
        y >= vertices['P'].point[1] - RADIUS && y <= vertices['P'].point[1] + RADIUS)
        return 'P'

    else if (x >= vertices['Q'].point[0] - RADIUS && x <= vertices['Q'].point[0] + RADIUS &&
        y >= vertices['Q'].point[1] - RADIUS && y <= vertices['Q'].point[1] + RADIUS)
        return 'Q'

    else if (x >= vertices['R'].point[0] - RADIUS && x <= vertices['R'].point[0] + RADIUS &&
        y >= vertices['R'].point[1] - RADIUS && y <= vertices['R'].point[1] + RADIUS)
        return 'R'
}