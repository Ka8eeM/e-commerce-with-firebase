import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '###';
        router.navigateByUrl(returnUrl);
      }
    })
  }
}