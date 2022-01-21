import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  @Input('text') text? : string;
  @Input() color! : string;
  @Output() btnClick = new EventEmitter<void>();

  constructor() {

  }

  ngOnInit(): void {
  }

  onClick() {
    return this.btnClick.emit(); //mit dem Eventemitter geben wir den Click zurück und können die Funktionalität an den jeweiligen UseCase anpassen
  }

}
