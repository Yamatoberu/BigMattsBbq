import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Big Matt's BBQ";

   homeClick(){
    let appHome = document.getElementsByTagName("app-home") as HTMLCollectionOf<HTMLElement>;
    let appQuote = document.getElementsByTagName("app-quote") as HTMLCollectionOf<HTMLElement>;
    let appAbout = document.getElementsByTagName("app-about") as HTMLCollectionOf<HTMLElement>;
    let appMenu = document.getElementsByTagName("app-menu") as HTMLCollectionOf<HTMLElement>;

    if (appHome.length != 0) {
      appHome[0].style.display = "block";
    }

    if (appQuote.length != 0) {
      appQuote[0].style.display = "none";
    }

    if (appAbout.length != 0) {
      appAbout[0].style.display = "none";
    }

    if (appMenu.length != 0) {
      appMenu[0].style.display = "none";
    }
  }
   quoteClick(){
    let appHome = document.getElementsByTagName("app-home") as HTMLCollectionOf<HTMLElement>;
    let appQuote = document.getElementsByTagName("app-quote") as HTMLCollectionOf<HTMLElement>;
    let appAbout = document.getElementsByTagName("app-about") as HTMLCollectionOf<HTMLElement>;
     let appMenu = document.getElementsByTagName("app-menu") as HTMLCollectionOf<HTMLElement>;

    if (appHome.length != 0) {
      appHome[0].style.display = "none";
    }

    if (appQuote.length != 0) {
      appQuote[0].style.display = "block";
    }

    if (appAbout.length != 0) {
      appAbout[0].style.display = "none";
    }

     if (appMenu.length != 0) {
       appMenu[0].style.display = "none";
     }
  }
   aboutClick(){
    let appHome = document.getElementsByTagName("app-home") as HTMLCollectionOf<HTMLElement>;
    let appQuote = document.getElementsByTagName("app-quote") as HTMLCollectionOf<HTMLElement>;
    let appAbout = document.getElementsByTagName("app-about") as HTMLCollectionOf<HTMLElement>;
     let appMenu = document.getElementsByTagName("app-menu") as HTMLCollectionOf<HTMLElement>;

    if (appHome.length != 0) {
      appHome[0].style.display = "none";
    }

    if (appQuote.length != 0) {
      appQuote[0].style.display = "none";
    }

    if (appAbout.length != 0) {
      appAbout[0].style.display = "block";
    }

     if (appMenu.length != 0) {
       appMenu[0].style.display = "none";
     }
  }

  menuClick(){
    let appHome = document.getElementsByTagName("app-home") as HTMLCollectionOf<HTMLElement>;
    let appQuote = document.getElementsByTagName("app-quote") as HTMLCollectionOf<HTMLElement>;
    let appAbout = document.getElementsByTagName("app-about") as HTMLCollectionOf<HTMLElement>;
    let appMenu = document.getElementsByTagName("app-menu") as HTMLCollectionOf<HTMLElement>;

    if (appHome.length != 0) {
      appHome[0].style.display = "none";
    }

    if (appQuote.length != 0) {
      appQuote[0].style.display = "none";
    }

    if (appAbout.length != 0) {
      appAbout[0].style.display = "none";
    }

    if (appMenu.length != 0) {
      appMenu[0].style.display = "block";
    }
  }
}
