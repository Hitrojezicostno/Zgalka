import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/pos/pos.html'
})
export class PosPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}