import {Page, NavController, NavParams, Alert, MenuController, IonicApp, ActionSheet} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {Component} from 'angular2/core';
import {SettingsPage} from '../settings/settings'; 
import {BlagajnaPage} from '../blagajna/blagajna'; 
import {ProcessPage} from '../process/process'; 
import {CodelistPage} from '../codelist/codelist'; 
import {SigninPage} from '../signin/signin';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
	static get parameters() {
	    return [[NavController], [NavParams], [Platform]];
	  }
	constructor(nav, navParams, platform) {
		this.platform = platform;
		this.nav = nav;
		this.date = Date.now();
		this.clock = Date.now();
		setInterval(() => { this.clock = Date.now(); }, 1000);
	}
	presentActionSheet() {
		let actionSheet = ActionSheet.create({
			title: 'Možnosti',
			buttons: [
				{
					text: 'Odjava',
					icon: !this.platform.is('ios') ? 'log-out' : null,
					handler: () => {
					  this.nav.push(SigninPage);
					}
				},{
					text: 'Sinhronizacija',
					icon: !this.platform.is('ios') ? 'cloud' : null,
					handler: () => {
					  console.log('Sinhronizacija clicked');
					}
				},{
					text: 'O programu',
					icon: !this.platform.is('ios') ? 'book' : null,
					handler: () => {
					  console.log('O programu clicked');
					}
				},{

					text: 'Cancel',
					role: 'cancel',
					icon: !this.platform.is('ios') ? 'close' : null,
					handler: () => {
					  console.log('Cancel clicked');
					}
				}
			]
			});
		this.nav.present(actionSheet);
	}

	open(event, item) {
		console.log(item);
		switch(item) {
			case 'nastavitve' : this.nav.push(SettingsPage);
			break;
			case 'blagajna' : this.presentPrompt();
			break;
			case 'procesi' : this.nav.push(ProcessPage);
			break;
			case 'artikli' : this.nav.push(CodelistPage);
			break;
		}
	}

	presentPrompt() {
	  let alert = Alert.create({
	    title: 'Odpri blagajno',
	    inputs: [
	      {
	        name: 'username',
	        placeholder: 'Uporabniško ime'
	      },
	      {
	        name: 'password',
	        placeholder: 'Geslo',
	        type: 'password'
	      }
	    ],
	    buttons: [
	      {
	        text: 'Prekliči',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Potrdi',
	        handler: data => {
	        	this.nav.push(BlagajnaPage);
	        }
	      }
	    ]
	  });
	  this.nav.present(alert);
	}
}
