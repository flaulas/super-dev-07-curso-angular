import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  imports: [FormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.scss'
})
export class CadastroAluno {
  nome: string = "";
  nota1?: number;
  nota2?: number;
  nota3?: number;
  frequencia?: number;
}
