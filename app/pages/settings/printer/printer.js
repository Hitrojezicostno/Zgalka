import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/printer/printer.html'
})
export class PrinterPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}