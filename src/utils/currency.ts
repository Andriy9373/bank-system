export function currency(value: number, currency='UAH') {
    const formatter = new Intl.NumberFormat('ua-UA', { currency, style: 'currency' });

    return formatter.format(value);
}