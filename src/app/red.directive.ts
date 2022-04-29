import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[red]',
})
export class RedDirective {
  @Input() isColor: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    if (this.isColor === true) {
      this.setColor('red');
    } else {
      this.setColor('black');
    }
  }

  private setColor(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'color', val);
  }
}
