import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/clients/clients.html'
})
export class ClientsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}