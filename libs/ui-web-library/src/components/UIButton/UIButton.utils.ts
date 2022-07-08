export const getBgColor = (color: string) => {
  switch (color) {
    case 'red':
      return '#c20b0b';
    case 'green':
      return '#218d1f';
    default:
      return '#0066ff';
  }
};

export const getDisabledBgColor = (color: string) => {
  switch (color) {
    case 'red':
      return '#ff9e9e';
    case 'green':
      return '#90b08f';
    default:
      return '#0066ff';
  }
};
