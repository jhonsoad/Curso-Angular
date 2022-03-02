import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  urlImagem = 'https://super.abril.com.br/wp-content/uploads/2019/06/site_temponatureza.png'

  cursoAngular: boolean = true

  getvalor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
