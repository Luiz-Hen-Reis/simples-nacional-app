type AnexoData = {
    [tag: string]: {
        [range: string]: {
            aliquot: number,
            deduction: number;
        }
    }
}

export const anexoData: AnexoData = {
    'anexo-I': {
        'range-1': {
           aliquot: 4.00,
           deduction: 0,
        },
        'range-2': {
           aliquot: 7.30,
           deduction: 5940,
        },
        'range-3': {
           aliquot: 9.50,
           deduction: 13860,
        },
        'range-4': {
           aliquot: 10.70,
           deduction: 22500,
        },
        'range-5': {
           aliquot: 14.30,
           deduction: 87300,
        },
        'range-6': {
           aliquot: 14,
           deduction: 378000,
        },
    }
}