import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})

export class MiDirectivaDirective implements OnInit {

  constructor(public elmentRef: ElementRef, public render: Renderer2) {}

  @Input() appMiDirectiva: boolean;

  @Input() color: string;
  @Input() underline: boolean;

  ngOnInit() {
    console.log(`color: ${this.color} , underline: ${this.underline}`);
    this.render.setStyle(this.elmentRef.nativeElement, 'color', this.color);
    this.render.setStyle(this.elmentRef.nativeElement, 'text-decoration', this.underline ? 'underline' : '');
  }

  /* color: boolean;

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(color){
    if (color) { this.render.setStyle(this.elmentRef.nativeElement, 'color', 'purple');
  } else {
    this.render.setStyle(this.elmentRef.nativeElement, 'color', 'green');
  }

  }

  ngOnInit() {
    if (this.appMiDirectiva) { this.render.setStyle(this.elmentRef.nativeElement, 'color', 'blue'); }
  }
  */

}
