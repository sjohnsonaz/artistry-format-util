export function decimal(value: number, digits: number = 0) {
    value = value || 0;
    return value.toFixed(digits);
}

export function currency(
    value: number,
    locales: string | string[] = 'english',
    currency: string = 'USD',
    digits?: number
) {
    value = value || 0;
    return value.toLocaleString(locales, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: digits
    });
}

export function date(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    let date = (value instanceof Date) ? value : new Date(value);
    return date.toLocaleDateString(locales, options);
}

export function time(value: string | Date, locales?: string | string[], options?: Intl.DateTimeFormatOptions) {
    let date = (value instanceof Date) ? new Date(value.toString()) : new Date(value);
    return date.toLocaleTimeString(locales, options);
}