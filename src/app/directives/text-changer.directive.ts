import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextChanger]',
})
export class TextChangerDirective {
  @Input() textChanged =
    'This is the default text on click if you want to change it or make it dynamic pass text to the directive';

  @HostListener('click') onClick() {
    this.elementRef.nativeElement.innerText = this.textChanged;
  }
  constructor(private elementRef: ElementRef) {}
}
