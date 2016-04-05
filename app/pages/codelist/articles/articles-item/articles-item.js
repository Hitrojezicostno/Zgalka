import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/articles/articles-item/articles-item.html'
})
export class ArticlesItemPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
  	this.nav = nav;
  	this.item = navParams.get('item');
  	console.log(this.item);
  }
}
