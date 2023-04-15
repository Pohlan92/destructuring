export default function destructuring(obj) {
  const { special } = obj;
  special.forEach((elem) => {
    if (!elem.description) {
      elem.description = 'Описание недоступно';
    }
  });
  return special;
}
