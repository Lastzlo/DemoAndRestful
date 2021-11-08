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
  constructor( private emailService: EmailService){}

  displayModal!: boolean;
  isScheduleFormHidden!: boolean;
  isEnableSchedule!: boolean;

  public switchScheduleFormHidden() {
    this.isScheduleFormHidden = !this.isScheduleFormHidden;
  }


  public showModalDialog(emailForm: NgForm) {
    this.isEnableSchedule = false;
    this.isScheduleFormHidden = true;
    emailForm.reset();
    this.displayModal = true;
  }

  public onSendDate(): void {
    let currDateTime: Date = new Date();
    console.log('currDateTime', currDateTime)

    this.emailService.checkDate(currDateTime).subscribe(
      (response: Date) => console.log(response)
    );

  }

  public onSendEmail(emailForm: NgForm): void {
    this.displayModal = false;
    console.log('emailForm', emailForm.value);

    const email = this.parseForm(emailForm);
    console.log('email', email);

    this.emailService.addEmail(email).subscribe(
      (response: Email) => console.log(response)
    );

    emailForm.reset();
  }

  public parseRecipients(inputEmails: string[] | null, type: RecipientType): Recipient[] {
    let recipients: Recipient[] = [];
    if(inputEmails === null) return recipients;

    inputEmails.forEach(inputEmail => {
      recipients.push(
        {
          email: inputEmail,
          recipientType: type
        } as Recipient
      )
    })
    return recipients;
  }

  public parseForm(emailForm: NgForm): Email {

    const email = {
      emailTemplate: {
        body: emailForm.value.emailBody,
        subject: emailForm.value.emailSubject
      },
      emailSchedule: {
        sendDateTime: emailForm.value.emailSendDate,
        repeatAt: RepeatType.NOTHING
      },
      recipients: [] as Recipient[]
    } as Email;

    const recipientsTO = this.parseRecipients(emailForm.value.recipientsEmailsTO, RecipientType.TO);
    recipientsTO.forEach(rec => email.recipients.push(rec));

    const recipientsCC = this.parseRecipients(emailForm.value.recipientsEmailsCC, RecipientType.CC);
    recipientsCC.forEach(rec => email.recipients.push(rec));

    const recipientsBCC = this.parseRecipients(emailForm.value.recipientsEmailsBCC, RecipientType.BCC);
    recipientsBCC.forEach(rec => email.recipients.push(rec));

    return email;
  }

}
