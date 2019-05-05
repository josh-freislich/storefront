
export const formatMoney    = (val) => parseFloat(val) ? parseFloat(val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : '0.00';
const addMoney              = (a, b) => ((parseFloat(a) || 0) + (parseFloat(b) || 0)).toFixed(2);
export const sumMoney       = (...args) => args.reduce((sum, val) => addMoney(sum, val), '0.00');
