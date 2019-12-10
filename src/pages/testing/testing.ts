import { AngularFirestore } from 'angularfire2/firestore';
import  firebase  from 'firebase/app';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the TestingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class TestingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, private db:AngularFirestore) {


    this.db.collection('coupons',ref=>ref.where('Id','==','1250')).valueChanges().subscribe(res=>{
      console.log(res)
    })

    this.http.get('assets/cupones_tabla.json').subscribe(res=>{
      let list = res['codes']

     

      // list.forEach(el => {        
       
      //  this.db.collection('coupons').doc(el.cupon).set(el).then(resDb=>{
      //   console.log('saved')
      //  }).catch(err=>{
      //    console.log(err)
      //  })

  

      // });
      
      


    })
  }

  ionViewDidLoad() {
    // var offsetRef = firebase.database().ref(".info/serverTimeOffset");
    // offsetRef.on("value", function(snap) {
    //   var offset = snap.val();
    //   var estimatedServerTimeMs = new Date().getTime() + offset;
    //   console.log(estimatedServerTimeMs);
    // });


    
  }

}
