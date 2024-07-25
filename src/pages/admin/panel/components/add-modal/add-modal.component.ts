import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzGridModule,
    NzButtonModule,
  ],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss',
})
export class AddModalComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private modalRef: NzModalRef) {
    this.form = this.fb.group({
      code: new FormControl('', [Validators.required]),
      libelle: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      modifierPar: new FormControl('', []),
    });
  }

  onClose() {
    this.modalRef.close();
  }
  onSubmit() {
    const formRaw = this.form.getRawValue();

    this.modalRef.close(formRaw);
  }
}
