import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.css']
})
export class FontSizerComponent implements OnInit {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  inc() { this.resize(+1); }
  dec() { this.resize(-1); }

  resize(delta: number) {
    this.size = +this.size + delta;
    this.sizeChange.emit(+this.size);
  }

  constructor() { }

  ngOnInit() {
  }

}
