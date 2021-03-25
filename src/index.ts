type Empty = undefined | null | never[] | never | '' ;

type NotEmpty = string | any[] | object | number;

function isEmpty(value: Empty | NotEmpty): value is Empty {
    switch (typeof value) {
        case 'object':
            return value === null ? true : !Object.keys(value).length;
        case 'string':
            return !value.trim().length;
        default:
            return !value;
    }
}

export default isEmpty;