import { Component, signal } from '@angular/core';

type EventFilter = 'todos' | 'proximo' | 'feito';
type AgendaEvent = {
  state: 'proximo' | 'feito';
  date: string;
  type: string;
  title: string;
  location: string;
  text: string;
};

@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  protected readonly activeFilter = signal<EventFilter>('todos');

  protected readonly agenda: readonly AgendaEvent[] = [
    { state: 'proximo', date: 'Data a confirmar', type: 'Lançamento', title: 'Lançamento de Sangue na Neve', location: 'Paranavaí, PR', text: 'Noite de lançamento com leitura de trechos, conversa com o autor e sessão de assinaturas.' },
    { state: 'proximo', date: 'Data a confirmar', type: 'Oficina', title: 'Oficina de escrita criativa em escola pública', location: 'Paranavaí, PR', text: 'Encontro com estudantes sobre construção de mundo, personagem e as escolhas que movem uma história.' },
    { state: 'proximo', date: 'Data a confirmar', type: 'Oficina', title: 'Oficina de escrita criativa em escola pública', location: 'Maringá, PR', text: 'Mesma oficina, na cidade onde o autor estudou. Aberta a turmas do ensino fundamental e médio.' },
    { state: 'proximo', date: 'Ao longo do ano', type: 'Clubes de leitura', title: 'Encontros com clubes de leitura', location: 'Presencial e online', text: 'Clubes de todo o país recebem exemplares e tags, e o autor participa da conversa sobre o Livro I.' },
  ];

  protected get filteredAgenda(): readonly AgendaEvent[] {
    const filter = this.activeFilter();
    return filter === 'todos' ? this.agenda : this.agenda.filter((event) => event.state === filter);
  }

  protected setFilter(filter: EventFilter): void {
    this.activeFilter.set(filter);
  }
}
