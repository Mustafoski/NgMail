import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signedin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  // ngOnInit(): void {
  //   this.authService.signedin$.subscribe((signedin) => {
  //     this.signedin = signedin;
  //   });
  // }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => {});
  }
}
