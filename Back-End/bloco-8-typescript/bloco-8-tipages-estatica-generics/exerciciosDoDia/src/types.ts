export interface Pizza {
  flavor: string;
  slice: 4 | 6 | 7;
}

function createPizza(type: Pizza): string {
  return `Pizza de sabor ${type.flavor} com ${type.slice} pedacos`;
};