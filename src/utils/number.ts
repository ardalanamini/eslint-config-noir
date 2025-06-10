export const ALLOWED_MAGIC_NUMBERS = [
  ...new Set(Array.from({ length: 11 })
    .flatMap((_, index) => [index, +`-${ index }`, `${ index }n`, `-${ index }n`])),
];
