import { Component, OnInit } from '@angular/core';
import { AuteursService } from '../../../core/services/auteurs.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule, NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddModalComponent } from './components/add-modal/add-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzModalModule, NzTableModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent implements OnInit {
  list: Array<any> = [];
  ITEMS: Array<any> = [];
  isLoading: boolean = false;
  constructor(
    private _service: AuteursService,
    private modalService: NzModalService
  ) {}
  ngOnInit(): void {
    // this.getAll();
    // this.onDelete();
  }

  getAll() {
    this._service.getAll().subscribe((response) => {
      console.log(response);
      if (response) {
      }
    });
  }

  goCreate() {
    this.isLoading = true;
    this.modalService
      .create({
        nzTitle: 'Ajouter des auteurs',
        nzFooter: null,
        nzContent: AddModalComponent,
      })
      .afterClose.subscribe((response) => {
        this.isLoading = false;

        if (response) {
          this.ITEMS.push(response);

          console.log(this.ITEMS);
        }
      });
  }
  onDelete() {
    this.modalService
      .create({
        nzTitle: 'Supprimer la donnée',
        nzFooter: null,
        nzContent: DeleteModalComponent,
      })
      .afterClose.subscribe((response) => {
        this.isLoading = false;

        if (response) {
        }
      });
  }
}
