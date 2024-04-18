
import { Component } from '@angular/core';
import { Hero } from '../hero'; // นำเข้า interface Hero มาใช้

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
