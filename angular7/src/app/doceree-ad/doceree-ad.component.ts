import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doceree-ad',
  templateUrl: './doceree-ad.component.html',
  styleUrls: ['./doceree-ad.component.scss']
})
export class DocereeAdComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    this.loadScriptForDivData();
    this.loginToDoceree();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.src = url;
    body.appendChild(script);
  }

  public loadScriptForDivData() {
    const el = <HTMLDivElement> document.getElementById('DOC_11rvfbjkjbeoxh5');
    const script = document.createElement('script');
    script.innerText = "var docCont={content_id:'DOC_11rvfbjkjbeoxh5',content_sizes:['300 x 250'],click:'DOCEREE_CLICK_URL_UNESC'};var docereeAds = docereeAds || {};docereeAds[docCont.content_id] = docCont;";  
    el.appendChild(script);
    this.loadScript('https://dev-servedbydoceree.doceree.com/resources/d/render.js');
  }

  public loginToDoceree() {
    const body = <HTMLDivElement> document.body;
     
    // India user details -
     var userObj = {
      firstName: "Akhileshcomp", 
      lastName: "Guptacomp", 
      specialization: "Pediatrics", 
      gender: "Male",
      email: "guptacomp@gmail.com",
      city: "gurugram",
      zipCode: "122001", 
    }

    // US user details -
    // var userObj = {
    //     hashedNPI: '126b68f7863008f0d19a387284a5d9df5518343ae3903b4a4a0a4773fe75e309',
    //     hashedEmail: '7000e00356101e5b6294bd47de3f903005b619e5e4b66f0f4b5971e86b67cc42',
    // }

    const el = document.createElement('script');
    el.innerText = "docereeLogIn(" + JSON.stringify(userObj) + ");"
    body.appendChild(el);
  }

  // script.innerText = 
  //   script.innerText = '';
  

}
