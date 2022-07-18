
let COUNT_ABBRS =  [ '', 'K', 'M', 'MD', 'T', 'P', 'E', 'Z', 'Y' ];


const UseFormatCount = (count, withAbbr = false, decimals = 2) => {
    const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));

    let result  = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
    if(withAbbr) {result}
    return result += `${COUNT_ABBRS[i]}`;
}

export default UseFormatCount;
