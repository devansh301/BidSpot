export function ConvertToRupees(price: number) {
    return Math.floor(price / 100).toFixed(2);
}