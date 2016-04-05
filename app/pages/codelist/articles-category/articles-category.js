import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/articles-category/articles-category.html'
})
export class ArticlesCategoryPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
  	this.items = ['Kategorija 1', 'Kategorija 2', 'Kategorija 3', 'Kategorija 4'];
  }
}