import { Component, OnInit } from '@angular/core';
import { UserService } from "./core/services/user.service";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Well-being Today';
  showCarousel: boolean = false;
  public slides = [
    { src: "https://source.unsplash.com/collection/9990991"},
    { src: "https://source.unsplash.com/collection/9990991"},
    { src: "https://source.unsplash.com/collection/9990991"},
    { src: "https://source.unsplash.com/collection/9990991"}
  ]
  constructor(private userService: UserService, private router: Router) {


    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          if( event.urlAfterRedirects == '/dashboard') {
            this.showCarousel = true;
          } else {
            this.showCarousel = false;
          }
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator
          // Present error to user
          console.log(event.error);
      }
  });

  }

   ngOnInit() {

     }
}
