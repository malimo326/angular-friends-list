import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  setFavorite(favorite: string) {
    this.favorite = favorite;
  }
  addFavorite(favorite: string) {
    this.favorites.push(favorite);
  }

  removeFavorite(favorite: string) {
    const idx = this.favorites.findIndex((f) => f === favorite);
    this.favorites.splice(idx, 1);
  }

}
