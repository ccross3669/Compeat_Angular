import { Component, Input, OnInit } from '@angular/core';

import { Article } from '../../core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html'
})
export class ArticleMetaComponent implements OnInit {
  @Input() article: Article;
  @Input() selectedUser: string;
  ngOnInit(): void {


  }

}
