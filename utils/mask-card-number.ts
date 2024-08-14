export function maskCardNumber(cardNumber: string) {
  let masked = cardNumber.slice(0, 12).replace(/./g, '*');

  masked += cardNumber.slice(12);

  return masked.replace(/(.{4})/g, '$1 ');
}
