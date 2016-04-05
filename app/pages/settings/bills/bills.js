import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/bills/bills.html'
})
export class BillsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}