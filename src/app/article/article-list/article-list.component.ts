import { Component,OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Article } from '../article.model'
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit,OnDestroy {

  constructor(public articlesService: ArticlesService) { }


  articles: Article[]=[];
  private articlesSub: Subscription;

  ngOnInit() {

    this.articlesService.getArticles();

    this.articlesSub= this.articlesService.getArticleUpdateListener()
    .subscribe((articles: Article[])=>{
      this.articles=articles;
    });
  }

  ngOnDestroy(){
    this.articlesSub.unsubscribe();
  }

}
