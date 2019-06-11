import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {



  private articles: Article[]=[];
  private articlesUpdated=new Subject<Article[]>();

  constructor(private http: HttpClient) {}

  getArticles(){
    return [...this.articles];
  }

  getArticleUpdateListener(){
    return this.articlesUpdated.asObservable();
  }

  addArticle(title: string,shortTitle: string,summary: string,imageTitle: string,imageCaption: string,altText: string){
    const article: Article={id: null, title: title,shortTitle: shortTitle,summary: summary,imageTitle: imageTitle,imageCaption: imageCaption,altText: altText}
    this.http.post<{message: string}>('http://localhost:7001/api/v1/article/createarticle',article)
    .subscribe((responseData)=>{
      console.log(responseData.message);
    })
    this.articles.push(article);
    this.articlesUpdated.next([...this.articles]);

  }

}
