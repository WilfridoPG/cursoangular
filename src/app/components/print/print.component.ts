import { Component,OnChanges, Input, Output,EventEmitter,SimpleChanges } from '@angular/core';
import { Person } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnChanges {
  @Input() public text:string = "";
  @Input() public person?:Person | undefined;
  @Output() name = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log("cambios", changes);
  }

  sendName(): void {
    this.name.emit(this.person?.name || 'hola')
  }

}
