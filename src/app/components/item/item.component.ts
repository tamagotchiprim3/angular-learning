import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() public itemText: string;
  @Input() public itemIndex: number;
  @Input() public colorCond: boolean;

  @Output() public itemEdited = new EventEmitter<string>();
  @Output() public itemDeleted = new EventEmitter<void>();

  public isEdit: boolean = true;

  public removeItem(): void {
    this.itemDeleted.emit();
  }

  public editItem(): void {
    if (!this.itemText) {
      return;
    }

    this.isEdit = !this.isEdit;
    this.itemEdited.emit(this.itemText);
  }
}
