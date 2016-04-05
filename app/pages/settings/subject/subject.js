import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/subject/subject.html'
})
export class SubjectPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}