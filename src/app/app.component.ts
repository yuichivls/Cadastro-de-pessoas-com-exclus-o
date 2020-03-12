import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadPessoaExcluir';
  nome = null;
  pessoas = [
    'Pessoa 1',
    'Pessoa 2'
  ];
  adicionar(nome){
    this.pessoas.push(this.nome);
    this.nome = null;
  }
  deletar(nome){
    this.pessoas.splice(this.nome, 1);
  }
}
