export interface UniversoItem {
  readonly number: string;
  readonly slug: string;
  readonly title: string;
  readonly kind: string;
  readonly description: string;
  readonly accent: string;
  readonly detail: string;
}

export const UNIVERSO_ITEMS: readonly UniversoItem[] = [
  { number: '01', slug: 'mundo', title: 'Mundo', kind: 'Cartografias · Léxico', description: 'O Nexus Eternum, seus reinos e territórios — mapas e o pequeno léxico que sustenta a geografia da saga.', accent: 'azul', detail: 'Mapas, territórios, paisagens e referências para compreender a geografia de Sangue Real.' },
  { number: '02', slug: 'personagens', title: 'Personagens', kind: 'Retratos · Fichas', description: 'Guardiões, aliados e adversários: retratos e fichas de quem move — ou atravessa — a história de Mystkallis.', accent: 'carmesim', detail: 'Retratos, fichas e estudos de presença das pessoas e entidades que atravessam a saga.' },
  { number: '03', slug: 'ecologia', title: 'Ecologia', kind: 'Ritos · Presenças', description: 'Os ciclos, as presenças antigas e as regras não escritas que regem o que vive dentro e fora do Nexus.', accent: 'verde', detail: 'Ciclos, presenças antigas e relações vivas que dão corpo ao universo da saga.' },
  { number: '04', slug: 'objetos', title: 'Objetos', kind: 'Relíquias · Símbolos', description: 'A Ânfora, o Nó Trino e os demais artefatos que carregam memória, função e perigo na saga.', accent: 'ouro', detail: 'Relíquias, símbolos e artefatos que carregam memória, função e perigo.' },
];

export function findUniversoItem(slug: string | null): UniversoItem | undefined {
  return UNIVERSO_ITEMS.find((item) => item.slug === slug);
}
