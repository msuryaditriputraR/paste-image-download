export default function roll(
    min: number,
    max: number,
    floatFlag: boolean = false
): number {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}
