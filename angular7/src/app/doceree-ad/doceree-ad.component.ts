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
    const el = <HTMLDivElement> document.getElementById('DOC_fg95yysk21ib1qg');
    const script = document.createElement('script');
    script.innerText = "var docCont={contet_id:'DOC_fg95yysk21ib1qg',content_sizes:['200 x 200'],content_type:'img'};";  
    el.appendChild(script);
    this.loadScript('http://localhost:2007/getJS.js');
    this.loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
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
  console.log('appending login')
  }

  // script.innerText = 
  //   script.innerText = '';
  

}
