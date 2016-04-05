import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/process/process.html'
})
export class ProcessPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}