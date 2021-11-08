/**
 * 
 * @param {Number} timestamp get the timestamp
 * @param {Boolean} showTime default value "false" means the result only show dd-mm-yyyy.
 * if the showTime value is "true". the result will be dd-mm-yyy hour-minutes-second.
 */
export default function (timestamp, showTime = false) {
    const date = new Date(+timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    let str = `${date.getFullYear()}-${month}-${day}`;
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        str += `\n${hour}:${minutes}:${seconds}`
    }
    return str;
}