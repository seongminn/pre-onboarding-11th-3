export const insertAdvertisement = <T>(arr: Array<T>, place: number) => {
  return arr.flatMap((element, idx) => {
    if ((idx + 1) % place === 0) {
      return [element, 'ad'];
    } else {
      return element;
    }
  });
};
