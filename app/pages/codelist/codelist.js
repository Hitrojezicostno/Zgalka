import {Page, NavController, NavParams} from 'ionic-angular';
import {ArticlesPage} from '../codelist/articles/articles';
import {ArticlesCategoryPage} from '../codelist/articles-category/articles-category';
import {ClientsPage} from '../codelist/clients/clients';
import {PayTypePage} from '../codelist/paying-type/paying-type';
import {TaxRatesPage} from '../codelist/tax-rates/tax-rates';
import {UsersPage} from '../codelist/users/users';

@Page({
  templateUrl: 'build/pages/codelist/codelist.html'
})
export class CodelistPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

	constructor(nav) {
	  	this.nav = nav;
	  	this.listItems = [
	  {
	    name: 'Šifrant artiklov',
	    desc: 'Registrirajte program',
	    icon: 'basket',
	    url: ArticlesPage
	  }, {
	  	name: 'Kategorije artiklov',
	  	icon: 'albums',
	  	url: ArticlesCategoryPage
	  }, {
	  	name: 'Šifrant klientov',
	  	icon: 'people',
	  	url: ClientsPage
	  }, {
	  	name: 'Uporabniki',
	  	icon: 'person',
	  	url: UsersPage
	  }, {
	  	name: 'Davčne stopnje',
	  	icon: 'pulse',
	  	url: TaxRatesPage
	  }, {
	  	name: 'Načini plačila',
	  	icon: 'card',
	  	url: PayTypePage
	  }
	  ];
	}

	openItem(event, item) {
	  	this.nav.push(item.url);
	  }
}