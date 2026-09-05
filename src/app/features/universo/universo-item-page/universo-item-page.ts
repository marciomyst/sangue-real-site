import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { findUniversoItem, UNIVERSO_ITEMS } from '../universo.data';

@Component({
  selector: 'app-universo-item-page',
  imports: [RouterLink],
  templateUrl: './universo-item-page.html',
  styleUrl: './universo-item-page.css',
})
export class UniversoItemPage {
  private readonly route = inject(ActivatedRoute);
  protected readonly item = toSignal(this.route.paramMap.pipe(map((params) => findUniversoItem(params.get('itemId')) ?? UNIVERSO_ITEMS[0])), { initialValue: UNIVERSO_ITEMS[0] });
  protected readonly previousItem = computed(() => {
    const index = UNIVERSO_ITEMS.findIndex((item) => item.slug === this.item().slug);
    return index > 0 ? UNIVERSO_ITEMS[index - 1] : undefined;
  });
  protected readonly nextItem = computed(() => {
    const index = UNIVERSO_ITEMS.findIndex((item) => item.slug === this.item().slug);
    return index < UNIVERSO_ITEMS.length - 1 ? UNIVERSO_ITEMS[index + 1] : undefined;
  });
}
