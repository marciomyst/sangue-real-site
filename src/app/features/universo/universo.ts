import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UNIVERSO_ITEMS } from './universo.data';

type ExtraItem = {
  number: string;
  title: string;
  description: string;
  kind: string;
  accent: string;
};

@Component({
  selector: 'app-universo',
  imports: [RouterLink],
  templateUrl: './universo.html',
  styleUrl: './universo.css',
})
export class Universo {
  protected readonly items = UNIVERSO_ITEMS;
}
