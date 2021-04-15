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
    this.loadScript('https://dev-programmatic.doceree.com/render/getJS');
  }

  public loginToDoceree() {
    const body = <HTMLDivElement> document.body;
    let userObj = {
      firstName: 'Scott',  
      lastName: 'Ames',
      specialization: 'Anesthesiology',
      zipCode: '11234',
      gender: 'Male'
  }

  const el = document.createElement('script');
  el.innerText = "docereeLogIn(" + JSON.stringify(userObj) + ");"
  body.appendChild(el);
  }

  // script.innerText = 
  //   script.innerText = '';
  

}
