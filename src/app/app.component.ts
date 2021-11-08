import {Component} from '@angular/core';
import {Email} from "./entity/email/email";
import {EmailService} from './service/email.service';
import {NgForm} from "@angular/forms";
import {RecipientType} from "./entity/email/recipientType";
import {RepeatType} from "./entity/email/repeatType";
import {Recipient} from "./entity/email/recipient";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss',]
})
export class AppComponent {

}
