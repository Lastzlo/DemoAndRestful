import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './inputtextdemo.html',
  styleUrls: ['./inputtextdemo.scss']
})
export class InputTextDemo {

  disabled: boolean = true;

  value2!: string;
}
