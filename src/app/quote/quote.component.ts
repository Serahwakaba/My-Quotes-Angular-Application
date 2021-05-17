import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,'Educational quote','Anyone who has never made a mistake has never tried anything new',"Albert Einstein","Albert Einstein",new Date(2021,5,12),20,0),
    new Quote(2,'Rasta quote',"Eat with the devil bt use a long spoon",'positive vibe.com','Yahi bu',new Date(2019,4,6),50,0),
    new Quote(3,"life quote","The road is loang bt we bt can't just stop","calos.com","Don carlos",new Date(2021,7,20),56,0),
    new Quote(4,'Love quote','One love to dih universe','Tuff Gong','Marley',new Date(2021,1,21),50,0),
    new Quote(1,'Motivation Quote','Anyone who has never made a mistake has never tried anything new',"Albert Einstein","Albert Einstein",new Date(2021,3,25),20,0),
    new Quote(1,'Sad quote','We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim.',"Albert Einstein","Albert Einstein",new Date(2021,3,25),20,0),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription;
  }

  deleteQuote(isComplete,index){
    if(isComplete){
      let toDelete=Swal.fire({
       title: `${this.quotes[index].name}`,
       icon: 'success',
       html:`The quote has been deleted successfully.`
         ,
       showCloseButton: true,
       showCancelButton: true,
       focusConfirm: false,
       confirmButtonText:
         '<i class="fa fa-thumbs-up"></i> Great!',
       confirmButtonAriaLabel: 'Thumbs up, great!',
       cancelButtonText:
         '<i class="fa fa-thumbs-down"></i>',
       cancelButtonAriaLabel: 'Thumbs down'
     })
    
    if(toDelete){
      this.quotes.splice(index,1)
    }
     }
 }
  
 addNewQuote(quote){
   let quotelength=this.quotes.length;
   quote.id=quotelength+1;
   quote.completeDate=new Date(quote.completeDate)
   this.quotes.push(quote)
 }
  constructor() {}

  ngOnInit(): void {
  }

}
