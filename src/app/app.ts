import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './shared/components/site-footer/site-footer';
import { SiteHeader } from './shared/components/site-header/site-header';
import { SnowEffect } from './shared/components/snow-effect/snow-effect';

@Component({
  imports: [RouterOutlet, SiteHeader, SiteFooter, SnowEffect],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
