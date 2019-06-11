import { Component, EventEmitter, Output } from '@angular/core'
import { style } from '@angular/animations';

import { Article } from '../article.model'

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
  @Output() articleCreated=new EventEmitter<Article>();


  newArticle='NO CONTENT';
  onAddArticle(){

    const article: Article = {
      title: this.enteredTitleValue,
      shortTitle: this.enteredShortTitleValue,
      summary: this.enteredSummaryValue,
      imageTitle: this.enteredImgTitleValue,
      imageCaption: this.enteredImgCaptionValue,
      altText: this.enteredAltTextValue
    }

    this.articleCreated.emit(article);

  }
}
