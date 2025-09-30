import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-campo',
  imports: [FormsModule],
  templateUrl: './campo.html',
  styleUrl: './campo.scss'
})
export class Campo {
  @Input() label: string = "";
  @Input() id: string | number | undefined = "";
  @Input() tipo: string = "";
  @Input() variavel: any;
  @Input() required: boolean = false;
}
