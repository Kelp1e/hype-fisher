export const getCornersPolygon = (size: string): string => {

  return `
      ${size} 0%,
      calc(100% - ${size}) 0%,
      calc(100% - ${size}) ${size},
      100% ${size},
      100% calc(100% - ${size}),
      calc(100% - ${size}) calc(100% - ${size}),
      calc(100% - ${size}) 100%,
      ${size} 100%,
      ${size} calc(100% - ${size}),
      0% calc(100% - ${size}),
      0% ${size},
      ${size} ${size}
  `
}
