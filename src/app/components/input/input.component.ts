import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class ChildComponent {
  @Input() public colorCond: boolean;

  @Output() itemAdded = new EventEmitter<string>();
  @Output() hideItems = new EventEmitter<boolean>();

  public itemText = '';
  public isHideItems = false;

  public addItem(): void {
    if (!this.itemText) {
      return;
    }
    this.itemAdded.emit(this.itemText);
    this.itemText = '';
  }

  public toHide(): void {
    this.isHideItems = !this.isHideItems;
    this.hideItems.emit(this.isHideItems);
  }
}
