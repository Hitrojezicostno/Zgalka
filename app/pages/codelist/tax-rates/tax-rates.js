import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/tax-rates/tax-rates.html'
})
export class TaxRatesPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  construct(nav) {
  	this.nav = nav;
  }


  open(event, item) {
     this.nav.push(ItemDetailsPage, {
       item: item
     });
  }
}