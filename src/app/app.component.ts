import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public itemList: string[] = [];
  public leverHide: boolean;
  public isRed: boolean = false;

  public addItem(itemText: string): void {
    this.itemList.push(itemText);
  }

  public removeItem(index: number): void {
    this.itemList.splice(index, 1);
  }

  public editItem(item: string, index: number) {
    this.itemList.splice(index, 1, item);
  }

  public toHide(condition: boolean): void {
    this.leverHide = condition;
  }

  public changeColor(): void {
    this.isRed = !this.isRed;
  }
}
