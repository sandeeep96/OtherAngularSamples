import { Directive,Input,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(private element: ElementRef) { }
@Input('appColorDirective') classKey: string;

@HostListener('mouseenter') onHover(){
  if(this.classKey==='with')
  this.element.nativeElement.style.backgroundColor='yellow';

  console.log(this.classKey);
}
 
@HostListener('mouseleave') onEndHover(){
  
  this.element.nativeElement.style.backgroundColor=null;

}



}
