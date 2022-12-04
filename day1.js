const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
  let arrReturn = []
  gifts.forEach(gift => {
    arrReturn.push("*".repeat(gift.length+2)+"\n*"+gift+"*\n"+"*".repeat(gift.length+2))
  });
  return arrReturn
}
const wrapped = wrapping(gifts)
console.log(wrapped)
