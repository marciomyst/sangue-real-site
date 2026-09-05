import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snow-effect',
  template: '<canvas #snowCanvas class="neve-global" aria-hidden="true"></canvas>',
  styleUrl: './snow-effect.css',
})
export class SnowEffect implements AfterViewInit, OnDestroy {
  @ViewChild('snowCanvas') private readonly snowCanvas?: ElementRef<HTMLCanvasElement>;

  private animationFrame = 0;
  private flakes: Array<{ x: number; y: number; radius: number; speed: number; drift: number }> = [];
  private readonly resizeHandler = () => this.resizeSnow();

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.resizeHandler);
    this.resizeSnow();

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.animateSnow();
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeHandler);
    cancelAnimationFrame(this.animationFrame);
  }

  private resizeSnow(): void {
    const canvas = this.snowCanvas?.nativeElement;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.getContext('2d')?.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(90, Math.max(28, Math.floor(width / 14)));
    this.flakes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.5 + Math.random() * 1.6,
      speed: 0.18 + Math.random() * 0.42,
      drift: (Math.random() - 0.5) * 0.18,
    }));
  }

  private animateSnow(): void {
    const canvas = this.snowCanvas?.nativeElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgb(233 239 245 / 42%)';

    for (const flake of this.flakes) {
      flake.y += flake.speed;
      flake.x += flake.drift;
      if (flake.y > height + 4) flake.y = -4;
      if (flake.x > width + 4) flake.x = -4;
      if (flake.x < -4) flake.x = width + 4;
      context.beginPath();
      context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      context.fill();
    }

    this.animationFrame = requestAnimationFrame(() => this.animateSnow());
  }
}
