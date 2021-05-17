import { style } from '@angular/animations';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
  style
})
export class QuoteDetailComponent implements OnInit {


  @Input() quote:Quote;
  numberOflikes=0;
  numberOfdislike=0
  

  likebuttonclick(){
    this.quote.numberOflikes ++;
  }
  dislikebuttonclick(){
    this.quote.numberOfdislikes ++;
  }
  @Output()isComplete=new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
