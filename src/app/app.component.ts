import {Component, OnInit} from '@angular/core';
import {Email} from "./entity/email/email";
import {EmailService} from './service/email.service';
import {NgForm} from "@angular/forms";
import {RecipientType} from "./entity/email/recipientType";
import {RepeatType} from "./entity/email/repeatType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss',]
})
export class AppComponent {
  constructor( private emailService: EmailService){}

  displayModal!: boolean;

  showModalDialog(addForm: NgForm) {
    addForm.reset();
    this.displayModal = true;
  }


  public onSendEmail(addForm: NgForm): void {
    console.log('NgForm', addForm.value);
    this.displayModal = false;
    addForm.reset();


    // const defaultDate = new Date();
    // const email = {
    //   recipients: [
    //     {
    //       mailAddress: addForm.value.mailAddress,
    //       recipientType: RecipientType.TO
    //     }
    //   ],
    //   emailTemplate: {
    //     body: addForm.value.body,
    //     subject: addForm.value.subject
    //   },
    //   emailSchedule: {
    //     sendDate: defaultDate,
    //     repeatAt: RepeatType.NOTHING
    //   }
    // } as Email;
    // console.log('email', email);
    //
    // this.emailService.addEmail(email).subscribe(
    //   (response: Email) => {
    //     console.log(response);
    //     addForm.reset();
    //   }
    // );
  }

}
