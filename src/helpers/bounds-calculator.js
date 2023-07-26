// Функция для вычисления границ полилинии
const calculateBounds = (coords) => {
  const bounds = coords.reduce(
    (acc, coord) => {
      return [
        [Math.min(acc[0][0], coord[0]), Math.min(acc[0][1], coord[1])],
        [Math.max(acc[1][0], coord[0]), Math.max(acc[1][1], coord[1])],
      ];
    },
    [coords[0], coords[0]] // Инициализация границ первой точкой
  );

  return bounds;
};

export { calculateBounds };
