import { Component, EventEmitter, Output } from '@angular/core'
import { style } from '@angular/animations';

import { Article } from '../article.model'
import { NgForm } from '@angular/forms';

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
  onAddArticle(form: NgForm){

    if(form.invalid){
      return;
    }
    const article: Article = {
      title: form.value.title,
      shortTitle: form.value.shortTitle,
      summary: form.value.summary,
      imageTitle: form.value.imageTitle,
      imageCaption: form.value.imageCaption,
      altText: form.value.altText
    }

    this.articleCreated.emit(article);

  }
}
