export const num_word = (value: number, words: string[]) => {
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
};

export const dateFormatting = (date: string | Date) => {
  return new Date(date).toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const sortAsc = (arr: [], field: string) => {
  return arr.sort(function(a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

export const sortDesc = (arr: [], field: string) => {
  return arr.sort(function(a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}
