import { Component } from '@angular/core'
import { style } from '@angular/animations';

import { NgForm } from '@angular/forms';
import { ArticlesService } from '../articles.service';

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


  constructor(public articlesService: ArticlesService){}


  newArticle='NO CONTENT';
  onAddArticle(form: NgForm){


    if(form.invalid){
      return;
    }

    this.articlesService.addArticle(form.value.title,
      form.value.shortTitle,
      form.value.summary,
      form.value.imageTitle,
      form.value.imageCaption,
      form.value.altText);

      form.resetForm();
  }
}
