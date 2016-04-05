import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';
import {RegisterPage} from '../settings/register/register';
import {CertifyPage} from '../settings/certify/certify';
import {BillsPage} from '../settings/bills/bills';
import {PrinterPage} from '../settings/printer/printer';
import {BackupPage} from '../settings/backup/backup';
import {LicencePage} from '../settings/licence/licence';
import {PosPage} from '../settings/pos/pos';
import {SubjectPage} from '../settings/subject/subject';

@Page({
  templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav) {
  	this.nav = nav;
  	this.listItems = [
  {
    name: 'Registracija',
    desc: 'Registrirajte program',
    icon: 'log-in',
    url: RegisterPage
  },
  {
    name: 'Potrjevanje',
    desc: 'Potrjevanje računov',
    icon: 'key',
    url: CertifyPage
  }, {
    name: 'Poslovni subjekt',
    desc: 'Vnos podatkov o poslovnem subjektu',
    icon: 'home',
    url: SubjectPage
  },
  {
    name: 'Računi',
    desc: 'Nastavitve računov',
    icon: 'paper',
    url: BillsPage
  },{
    name: 'Tiskalnik',
    desc: 'Nastavitev tiskalnika',
    icon: 'print',
    url: PrinterPage
  }, {
    name: 'Varnostna kopija',
    desc: 'Varnostno kopirajte podatke',
    icon: 'cloud-upload',
    url: BackupPage
  }, {
    name: 'Licenca',
    desc: 'Podrobnosti o licenci',
    icon: 'list-box',
    url: LicencePage
  }, {
    name: 'POS',
    desc: 'Nastavitve POS terminala',
    icon: 'cash',
    url: PosPage
  }
  ];
  }

  openItem(event, item) {
  	this.nav.push(item.url);
  }

}