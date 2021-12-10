import { EmailService } from './../email.service';
import { AuthService } from './../../auth/auth.service';
import { IEmail } from './../email';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: IEmail;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      text: '',
      from: `${authService.username}@angular-email.com`,
      html: '',
    };
  }

  ngOnInit(): void {}

  onSubmit(email: IEmail): void {
    // Send the email of vie email service
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
