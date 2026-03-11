import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
  standalone: false,
})
export class Ellipsis {
  constructor(private elem: ElementRef) {
    this.elem.nativeElement.innerText;
  }
  value = " ";
  @HostListener('mouseenter') onHover(){
    if(this.elem.nativeElement.innerText.length > 30){
      this.value = this.elem.nativeElement.innerText;
      this.elem.nativeElement.innerText = this.elem.nativeElement.innerText.slice(0, 29) + "...";
    }
  }

  //declare the one to delete the directivex
  @HostListener('mouseleave') onLeave(){
    this.elem.nativeElement.innerText = this.value;
  }
}
