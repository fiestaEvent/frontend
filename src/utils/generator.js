const AtoZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';//eslint-disable-line
const atoz = 'abcdefghijklmnopqrstuvwxyz';
export default function generator(element){
  let count = 0;
  const interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, i) => {
        if (i < count) {
          return element.dataset.value[i];
        }
        return atoz[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (count >= element.dataset.value.length) {
      clearInterval(interval);
    }
    count = count + 1 / 2;
  }, 50);
};