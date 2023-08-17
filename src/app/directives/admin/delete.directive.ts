import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $ : any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef, private _renderer:Renderer2,private productService:ProductService, private spinner : NgxSpinnerService) { }


  @Input() id : string;
  @Output () callback : EventEmitter<any> = new EventEmitter();

  @HostListener("click")
   async onclick(){
    // console.log(this.id);

    this.spinner.show(SpinnerType.BackGroundWith);
    const td:HTMLTableCellElement = this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement.parentElement).fadeOut(1000, ()=> {
      this.callback.emit();
    });
  }

}

