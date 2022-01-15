import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdowntoggle]'
})
export class DropdowntoggleDirective {

  @HostBinding('class.open') dropdown = false;

  //@HostListener('click') toggleOpen(){
    //this.dropdown = !this.dropdown;
  //}
  //to close dropdown when clicked on any other place in DOM
  @HostListener('document:click',['$event']) toggleOpen(event:Event){
    this.dropdown = this.elementRef.nativeElement.contains(event.target) ? !this.dropdown : false;
  }
  constructor(private elementRef:ElementRef,private renderer:Renderer2) {

   }


}
