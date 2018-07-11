import { Directive, ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appCardColor]'
})
export class CardColorDirective {

  constructor(private el : ElementRef, private render : Renderer) { 
    render.setElementStyle(el.nativeElement, 'color','green');
  }

}
