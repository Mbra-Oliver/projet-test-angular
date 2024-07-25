import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss',
})
export class DeleteModalComponent {
  constructor(private modalRef: NzModalRef) {}

  onClose() {
    this.modalRef.close();
  }

  onDelete() {
    this.modalRef.close();
  }
}
