import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/backup/backup.html'
})
export class BackupPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}