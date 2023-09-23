import { Component, Inject, OnInit, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { List_Product_Image } from 'src/app/contracts/list_product_images';
import { ProductService } from 'src/app/services/common/models/product.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-select-product-image-dialog',
  templateUrl: './select-product-image-dialog.component.html',
  styleUrls: ['./select-product-image-dialog.component.scss'],
})
export class SelectProductImageDialogComponent
  extends BaseDialog<SelectProductImageDialogComponent>
  implements OnInit
{
  constructor(
    dialogRef: MatDialogRef<SelectProductImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectProductImageState | string,
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
    super(dialogRef);
  }

  @Output() options: Partial<FileUploadOptions> = {
    accept: '.png,.jpg,.jpeg, .gif',
    action: 'upload',
    controller: 'products',
    explanation: 'Ürün resimlerini seçin veya sürükleyin..',
    queryString: `id= ${this.data}`,
  };

  images: List_Product_Image[];

  async ngOnInit() {
    this.spinner.show(SpinnerType.BackGroundWith);
    this.images = await this.productService.readImages(
      this.data as string,
      () => this.spinner.hide(SpinnerType.BackGroundWith)
    );
  }

  async deleteImage(imageId: string) {
    this.spinner.show(SpinnerType.BackGroundWith);
    await this.productService.deleteImage(this.data as string, imageId, () =>
      this.spinner.hide(SpinnerType.BackGroundWith)
    );
  }
}

export enum SelectProductImageState {
  Close,
}
