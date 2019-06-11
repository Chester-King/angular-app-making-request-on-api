import { Component } from '@angular/core'
import { style } from '@angular/animations';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent{
  enteredAltTextValue='';
  enteredTitleValue='';
  enteredShortTitleValue='';
  enteredSummaryValue='';
  enteredImgCaptionValue='';
  enteredImgTitleValue='';


  newArticle='NO CONTENT';
  onAddArticle(){

    this.newArticle=this.enteredAltTextValue+this.enteredImgCaptionValue+this.enteredShortTitleValue;

  }
}
