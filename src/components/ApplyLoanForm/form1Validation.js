import {createValidator,required,integer,interval,decimal}  from 'utils/validation';

const form1Validation = createValidator({
    houseAvailable:[required],
    amount:[required,decimal,interval(20,300)],
    lifeTime:[required,integer,interval(1,12)]
})

export default form1Validation;