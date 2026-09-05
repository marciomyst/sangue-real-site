export interface SagaBook {
  readonly number: string;
  readonly slug: string;
  readonly title: string;
  readonly status: string;
  readonly description: string;
  readonly color: string;
  readonly available: boolean;
  readonly spine: string;
}

export const SAGA_BOOKS: readonly SagaBook[] = [
  {
    number: 'I',
    slug: 'sangue-na-neve',
    title: 'Sangue na Neve',
    status: 'Livro I',
    description: 'O início de Sangue Real, uma saga de fantasia, aventura e suspense em sete volumes.',
    color: '#b22b31',
    available: true,
    spine: 'livro-i',
  },
  {
    number: 'II',
    slug: 'sangue-e-lagrimas',
    title: 'Sangue e Lágrimas',
    status: 'Em escrita',
    description: 'O próximo volume da saga está em desenvolvimento.',
    color: '#3e90ae',
    available: false,
    spine: 'livro-ii',
  },
  {
    number: 'III',
    slug: 'sangue-e-ruina',
    title: 'Sangue e Ruína',
    status: 'Em escrita',
    description: 'O terceiro volume será anunciado no tempo da história.',
    color: '#d8a63c',
    available: false,
    spine: 'livro-iii',
  },
  {
    number: 'IV',
    slug: 'sangue-e-sombras',
    title: 'Sangue e Sombras',
    status: 'Planejado',
    description: 'Um lugar reservado na estante para o quarto volume.',
    color: '#788594',
    available: false,
    spine: 'livro-iv',
  },
  {
    number: 'V',
    slug: 'sangue-e-culpa',
    title: 'Sangue e Culpa',
    status: 'Planejado',
    description: 'Um lugar reservado na estante para o quinto volume.',
    color: '#9caab9',
    available: false,
    spine: 'livro-v',
  },
  {
    number: 'VI',
    slug: 'sangue-e-coroa',
    title: 'Sangue e Coroa',
    status: 'Planejado',
    description: 'Um lugar reservado na estante para o sexto volume.',
    color: '#232d3b',
    available: false,
    spine: 'livro-vi',
  },
  {
    number: 'VII',
    slug: 'sangue-e-destino',
    title: 'Sangue e Destino',
    status: 'Planejado',
    description: 'O espaço do desfecho permanece guardado na estante.',
    color: '#c6a253',
    available: false,
    spine: 'livro-vii',
  },
];

export function findSagaBook(slug: string | null): SagaBook | undefined {
  return SAGA_BOOKS.find((book) => book.slug === slug);
}
