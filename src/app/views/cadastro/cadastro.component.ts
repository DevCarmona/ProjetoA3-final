import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  marcar() {
    window.alert ('Consulta efetuada com sucesso')
    window.location.reload()
  }
}
