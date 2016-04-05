import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/codelist/users/users.html'
})
export class UsersPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}