import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolButton]'
})
export class CoolButtonDirective implements OnInit {

  @Input() appButtonDefaultBgColor: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() appButtonFocusBgColor: string = 'linear-gradient(0deg, rgb(205, 82, 110) 0%, rgb(266, 182, 248) 100%)';

  constructor(private el : ElementRef,
              private rend: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeElementBgColor(this.appButtonFocusBgColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeElementBgColor(this.appButtonDefaultBgColor);
  }

  ngOnInit() {
    this.changeElementBgColor(this.appButtonDefaultBgColor);
  }

  changeElementBgColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background-image', color);
  }
}
