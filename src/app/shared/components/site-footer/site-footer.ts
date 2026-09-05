import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="env">
        <div class="rodape">
          <div>
            <a class="marca" routerLink="/">
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
            <p>Uma saga de sete volumes sobre nomes apagados, cuidado excessivo e o preço de descobrir quem se é.</p>
          </div>
          <div>
            <h2>Navegar</h2>
            <ul>
              <li><a routerLink="/digital-book">Livro digital</a></li>
              <li><a routerLink="/audio-book">Audio-book</a></li>
              <li><a routerLink="/universo">Universo</a></li>
              <li><a routerLink="/events">Eventos</a></li>
            </ul>
          </div>
          <div>
            <h2>Projeto</h2>
            <ul>
              <li>Sangue na Neve</li>
              <li>Livro I</li>
              <li><a routerLink="/autor">Sobre o autor</a></li>
            </ul>
          </div>
        </div>
        <div class="base">
          <span>© 2026 Márcio Luiz Rossato Gomes. Todos os direitos reservados.</span>
          <span>Texto, projeto gráfico e capa do autor.</span>
        </div>
      </div>
    </footer>
  `,
})
export class SiteFooter {}
