import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-p-card',
  standalone: true,
  imports: [
    InputTextModule,
    ListboxModule,
    CardModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './p-card.component.html',
  styleUrl: './p-card.component.scss',
})
export class PCardComponent {
  @Input() randomCountries:any[] = [];
}
