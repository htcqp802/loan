import {createValidator, required, integer, interval, decimal,oneOf,idCard}  from 'utils/validation';

export const form1Validation = createValidator({
    houseAvailable: [required],
    moneyBorrow: [required, decimal, interval(20, 300)],
    loanPeriod: [required, integer, interval(1, 12)]
})


export const rightKinds = ["SHANG_PING_FANG"];
export const form2Validation = createValidator({
    rightKind: [oneOf(rightKinds)],
    communityName: [required],
    buildArea: [required,decimal],
    loanBankAcc2:[required,decimal],
    cardNoHouse:[idCard]
})

export const caculateValidation = createValidator({
    cAmount:[required,decimal],
    loanTime:[required,integer],
    payWay:[required,oneOf(['1','2','3'])],
    cNll:[required,decimal],
    payedYear:[required,integer],
    payedMounth:[required,integer]
})