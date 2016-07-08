import {createValidator, required, integer, interval, decimal, oneOf, idCard}  from 'utils/validation';

export const form1Validation = values => {
    const errors = {};
    errors.receiptInfo = createValidator({
        houseAvailable: [required],
        moneyBorrow: [required, decimal, interval(20, 300)],
        loanPeriod: [required, integer, interval(1, 12)]
    })(values.receiptInfo)

    return errors;
}

export const rightKinds = ["SHANG_PING_FANG"];


export const form2Validation = (values)=> {
    const errors = {};
    errors.houseInfoList = values.houseInfoList.map(createValidator({
        'right_kind': [oneOf(rightKinds)],
        communityName: [required],
        'build_area': [required, decimal],
        'loan_bank_acc2': [required, decimal],
        'card_no_house': [idCard]
    }))
    return errors;
}

export const caculateValidation = createValidator({
    cAmount: [required, decimal],
    loanTime: [required, integer],
    payWay: [required, oneOf(['1', '2', '3'])],
    cNll: [required, decimal],
    payedYear: [required, integer],
    payedMounth: [required, integer]
})