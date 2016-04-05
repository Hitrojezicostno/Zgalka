import {Page, NavController, NavParams, IonicApp, Modal} from 'ionic-angular';
import {ArticlesItemPage} from './articles-item/articles-item';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/add/operator/map'

@Page({
  templateUrl: 'build/pages/codelist/articles/articles.html'
})
export class ArticlesPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }

  openModal(characterNum) {
    let modal = Modal.create(ModalsContentPage);
    this.nav.present(modal);
  }

  constructor(nav, navParams, http) {
  	this.nav = nav;
  	this.http = http;
  	this.searchQuery = '';
    this.initializeItems();
    this.selectedItem = navParams.get('item');
  }

  initializeItems() {	
  	var link = 'http://localhost:8000/api/articles';
  	this.http.get(link)
    .map(res => res.json())
  	.subscribe(data => {
  		this.items = data;
      console.log(this.items);
  	}, error => {
  		console.log('ERR', error);
  	});
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.items = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }

  openItem(event, item) {
  	this.nav.push(ArticlesItemPage, {
  		item: item
  	});
  }

}

import {ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/articles/articles-item/article-add.html'
})
class ModalsContentPage {
	static get parameters() {
		return [[NavController], [NavParams], [ViewController], [Http]];
	}

	constructor(nav, navParams, viewCtrl, http) {
		this.http = http;
		this.article = {};
    this.article.unit = 1;
    this.article.category = 1;
    this.article.askForPrice = false;
    this.article.askForQuantity = false;
    this.article.forSale = true;
		this.viewCtrl = viewCtrl;
	}
	close() {
		this.viewCtrl.dismiss();
	}
	save() {
		var link = 'http://localhost:8000/api/articles';
		var data = this.article;
    console.log('DATA', this.article);
		let headers = new Headers({'Content-Type': 'application/json'})
		let options = new RequestOptions({ headers: headers });
		this.http.post(link, JSON.stringify(data), options)
		.subscribe(data => {
			console.log(data);
			this.data.response = data._body;
		}, error => {
			console.log('ERROR', error);
		});
	}
}
