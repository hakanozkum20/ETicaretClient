import { MatDialogRef } from '@angular/material/dialog';

export class BaseDialog<genericDialog> {
  constructor(public dialogRef: MatDialogRef<genericDialog>) {}

  close() {
    this.dialogRef.close();
  }
}
