export default function roll(min, max, floatFlag = false) {
    let r = Math.random() * (max - min) + min;
    return floatFlag ? r : Math.floor(r);
}
