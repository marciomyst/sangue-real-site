import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="topo" [class.fixa]="scrolled()">
      <div class="topo-int">
        <a class="marca" routerLink="/" aria-label="Sangue Real — início">
          <svg class="notrino aceso" viewBox="-132 -132 264 264" aria-hidden="true">
            <path class="laco" d="M-50,-28.868 A100,100 0 0 1 100,57.735 A100,100 0 0 1 -50,-28.868 Z" />
            <path class="laco" transform="rotate(120)" d="M-50,-28.868 A100,100 0 0 1 100,57.735 A100,100 0 0 1 -50,-28.868 Z" />
            <path class="laco" transform="rotate(240)" d="M-50,-28.868 A100,100 0 0 1 100,57.735 A100,100 0 0 1 -50,-28.868 Z" />
            <circle class="gema g-turquesa" cx="0" cy="-78" r="14" />
            <circle class="gema g-dourado" cx="-67.5" cy="39" r="14" />
            <circle class="gema g-carmesim" cx="67.5" cy="39" r="14" />
          </svg>
          <b>Sangue&nbsp;Real</b>
        </a>

        <button
          class="hamburguer"
          type="button"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="site-menu"
          [attr.aria-label]="menuOpen() ? 'Fechar menu' : 'Abrir menu'"
          (click)="toggleMenu()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <nav id="site-menu" class="menu" [class.aberto]="menuOpen()" aria-label="Navegação principal">
          <a routerLink="/" (click)="closeMenu()">Lançamento</a>
          <a routerLink="/digital-book" routerLinkActive="ativo" (click)="closeMenu()">Ler</a>
          <a routerLink="/audio-book" routerLinkActive="ativo" (click)="closeMenu()">Ouvir</a>
          <a routerLink="/universo" routerLinkActive="ativo" (click)="closeMenu()">Universo</a>
          <a routerLink="/autor" routerLinkActive="ativo" (click)="closeMenu()">O autor</a>
          <a routerLink="/events" routerLinkActive="ativo" (click)="closeMenu()">Agenda</a>
        </nav>
      </div>
    </header>
  `,
})
export class SiteHeader {
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 16);
  }
}
