import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
;
  
constructor(
private router: Router
){}
  
  ngOnInit(
  ) { }

  exibindoBotoes() {
    let chave: boolean;

    if (this.router.url === '/cep' || this.router.url === '/cnpj') {
      chave = false;
    } else {
      chave = true;
    }
    return chave;
  }

}




