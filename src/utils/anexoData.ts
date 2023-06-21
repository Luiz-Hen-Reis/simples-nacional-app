type AnexoData = {
    [tag: string]: {
        [range: string]: {
            nominalAliquot: number,
            deduction: number;
            ICMSAliquot?: number;
            ISSAliquot?: number;
        }
    }
}

export const anexoData: AnexoData = {
    'anexo-I': {
        'range-1': {
           nominalAliquot: 0.04,
           deduction: 0,
           ICMSAliquot: 0.34
        },
        'range-2': {
           nominalAliquot: 0.073,
           deduction: 5940,
           ICMSAliquot: 0.34
        },
        'range-3': {
           nominalAliquot: 0.095,
           deduction: 13860,
           ICMSAliquot: 0.335
        },
        'range-4': {
           nominalAliquot: 0.107,
           deduction: 22500,
           ICMSAliquot: 0.335
        },
        'range-5': {
           nominalAliquot: 0.143,
           deduction: 87300,
           ICMSAliquot: 0.335
        },
        'range-6': {
           nominalAliquot: 0.19,
           deduction: 378000,
           ICMSAliquot: 0
        },
    },
    'anexo-II': {
        'range-1': {
           nominalAliquot: 0.045,
           deduction: 0,
           ICMSAliquot: 0.32
        },
        'range-2': {
           nominalAliquot: 0.078,
           deduction: 5940,
           ICMSAliquot: 0.32
        },
        'range-3': {
           nominalAliquot: 0.10,
           deduction: 13860,
           ICMSAliquot: 0.32
        },
        'range-4': {
           nominalAliquot: 0.112,
           deduction: 22500,
           ICMSAliquot: 0.32
        },
        'range-5': {
           nominalAliquot: 0.147,
           deduction: 85500,
           ICMSAliquot: 0.32
        },
        'range-6': {
           nominalAliquot: 0.30,
           deduction: 720000,
           ICMSAliquot: 0
        },
    },
    'anexo-III': {
        'range-1': {
           nominalAliquot: 0.06,
           deduction: 0,
           ISSAliquot: 0.335
        },
        'range-2': {
           nominalAliquot: 0.112,
           deduction: 9360,
           ISSAliquot: 0.32
        },
        'range-3': {
           nominalAliquot: 0.135,
           deduction: 17640,
           ISSAliquot: 0.325
        },
        'range-4': {
           nominalAliquot: 0.16,
           deduction: 35640,
           ISSAliquot: 0.325
        },
        'range-5': {
           nominalAliquot: 0.21,
           deduction: 125640,
           ISSAliquot: 0.335
        },
        'range-6': {
           nominalAliquot: 0.33,
           deduction: 648000,
           ISSAliquot: 0
        },
    },
    'anexo-IV': {
        'range-1': {
           nominalAliquot: 0.045,
           deduction: 0,
           ISSAliquot: 0.445
        },
        'range-2': {
           nominalAliquot: 0.9,
           deduction: 8100,
           ISSAliquot: 0.40
        },
        'range-3': {
           nominalAliquot: 0.102,
           deduction: 12420,
           ISSAliquot: 0.40
        },
        'range-4': {
           nominalAliquot: 0.14,
           deduction: 39780,
           ISSAliquot: 0.40
        },
        'range-5': {
           nominalAliquot: 0.22,
           deduction: 183780,
           ISSAliquot: 0.40
        },
        'range-6': {
           nominalAliquot: 0.33,
           deduction: 828000,
           ISSAliquot: 0
        },
    },
    'anexo-V': {
        'range-1': {
           nominalAliquot: 0.155,
           deduction: 0,
           ISSAliquot: 0.14
        },
        'range-2': {
           nominalAliquot: 0.18,
           deduction: 4500,
           ISSAliquot: 0.17
        },
        'range-3': {
           nominalAliquot: 0.195,
           deduction: 9900,
           ISSAliquot: 0.19
        },
        'range-4': {
           nominalAliquot: 0.205,
           deduction: 17100,
           ISSAliquot: 0.21
        },
        'range-5': {
           nominalAliquot: 0.23,
           deduction: 62100,
           ISSAliquot: 0.235
        },
        'range-6': {
           nominalAliquot: 0.305,
           deduction: 540000,
           ISSAliquot: 0
        },
    },
}