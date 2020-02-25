import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var $: any;
declare let M : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Titles = [];
  Content = [];
  

  ngOnInit(): void {
    this.colab()
  }

  colab() : void {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    })
  }

  Add(tempTitle: HTMLInputElement, tempContent : HTMLTextAreaElement) : void {

    if(tempTitle.value === '' || tempContent.value === ''){
      alert("Los campos no pueden estar vacios!")
      
    }
    else{
      this.Titles.push(tempTitle.value)
      this.Content.push(tempContent.value)
      
    }
    tempTitle.value = "";
    tempContent.value = "";
    M.textareaAutoResize($('#textarea1')[0]);
  }
}
