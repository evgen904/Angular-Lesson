import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'red'

  @Input() fontWeight = 'normal'

  @Input() dStyle!: {border?: string, borderRadius?: string}

  @HostBinding('style.color') elColor = ''

  constructor(private el: ElementRef, private r: Renderer2) {
    //this.r.setStyle(this.el.nativeElement, 'color', '#c00')
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    // this.r.setStyle(this.el.nativeElement, 'color', this.color)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = ''
    // this.r.setStyle(this.el.nativeElement, 'color', null)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.r.setStyle(this.el.nativeElement, 'border', null)
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
  }

}
