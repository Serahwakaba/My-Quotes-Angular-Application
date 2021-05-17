import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appQuotes]'
})
export class QuotesDirective {

  constructor(private elem:ElementRef) { }
   @HostListener("hover") onHovering(){
     this.textDeco("uppercase")
   }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action
  }
}