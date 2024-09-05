import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Countries } from '../../country.model';

@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ListboxModule,
    InputTextModule,
  ],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.scss',
})
export class ListboxComponent {

  @Input() countries: Countries[] = [];
  @Output() countrySelected = new EventEmitter<Countries>();

  onChange(event: any): void {
    this.countrySelected.emit(event.value);
  }
}
