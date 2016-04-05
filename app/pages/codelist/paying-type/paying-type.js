import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/paying-type/paying-type.html'
})
export class PayTypePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}