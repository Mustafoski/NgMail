import { EmailService } from './../email.service';
import { IEmail } from './../email';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-email-replay',
  templateUrl: './email-replay.component.html',
  styleUrls: ['./email-replay.component.css'],
})
export class EmailReplayComponent implements OnChanges {
  showModal = false;
  @Input() email: IEmail;
  constructor(private emailService: EmailService) {}

  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n>');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n----------------${this.email.from} wrote:\n>${text}`,
    };
  }

  onSubmit(email: IEmail): void {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
