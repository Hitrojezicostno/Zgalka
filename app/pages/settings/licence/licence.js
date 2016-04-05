import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/licence/licence.html'
})
export class LicencePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}