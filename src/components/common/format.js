export function toThousandCommas(number) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return number !== undefined ? number.toString().replace(regexp, ",") : "";
}
