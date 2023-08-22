import { Component } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
})
export class AnimeComponent {
  animeList = [
    'Monster',
    'Cowboy Bebop',
    'Fate/Stay Night',
    'Code Geass: Lelouch of the Rebellion',
    'Berserk',
  ];
}
