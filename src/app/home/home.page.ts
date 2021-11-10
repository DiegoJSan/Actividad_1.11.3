import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  usuarios: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {

    this.usuarios = this.httpClient.get('https://raw.githubusercontent.com/DiegoJSan/Actividad_1.11.3/master/MOCK_DATA%20.json')

  }

  

}
