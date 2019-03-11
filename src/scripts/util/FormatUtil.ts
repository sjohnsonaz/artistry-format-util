export function decimal(value: number, digits: number = 1) {
    value = value || 0;
    return value.toFixed(digits);
}

export function currency(value: number, prefix: string = '$', digits: number = 2) {
    value = value || 0;
    return prefix + value.toFixed(digits);
}

export function date(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    let date = (value instanceof Date) ? value : new Date(value);
    return date.toLocaleDateString(locales, options);
}

export function time(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    let date = (value instanceof Date) ? new Date(value.toString()) : new Date(value);
    return date.toLocaleTimeString(locales, options);
}