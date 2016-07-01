const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0];

export function email(value) {
    if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return '无效的邮箱地址';
    }
}

export function required(value) {
    if (isEmpty(value)) {
        return '此项为必填项,不允许为空';
    }
}

export function minLength(min) {
    return value => {
        if (!isEmpty(value) && value.length < min) {
            return `至少需要${min}个字符`;
        }
    };
}

export function maxLength(max) {
    return value => {
        if (!isEmpty(value) && value.length > max) {
            return `最多输入${max}个字符`;
        }
    };
}

export function integer(value) {
    if (!Number.isInteger(Number(value))) {
        return '请输入整数';
    }
}
export function decimal(value) {
    if (!/^(([0-9]+)|([0-9]+\.[0-9]{1,2}))$/.test(value)) {
        return '请输入数字,最多可保留2位小数,不可为负数';
    }
}

export function interval(min, max) {
    return value => {
        if (!Number(value) || Number(value) < min || Number(value) > max) {
            return `请输入${min}-${max}中间的数值`;
        }
    }
}

export function oneOf(enumeration) {
    return value => {
        if (!~enumeration.indexOf(value)) {
            return '请选择';
        }
    };
}

export function match(field) {
    return (value, data) => {
        if (data) {
            if (value !== data[field]) {
                return '不匹配';
            }
        }
    };
}

export function idCard(value) {
    if (!isEmpty(value) && !/(^\d{15}$)|(^\d{14}(\d|X|x)$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        return '请输入正确的身份证号'
    }
}


export function createValidator(rules) {
    return (data = {}) => {
        const errors = {};
        Object.keys(rules).forEach((key) => {
            const rule = join([].concat(rules[key]));
            const error = rule(data[key], data);
            if (error) {
                errors[key] = error;
            }
        });
        return errors;
    };
}
