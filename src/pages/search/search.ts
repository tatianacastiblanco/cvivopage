
import { HomeScreenGroupItem } from './../../data/HomeScreenGroupItem';
import { VimeoService } from './../../services/VimeoService';
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, Platform, LoadingController, App } from 'ionic-angular';
import { SearchItem } from "../../data/SearchItem";
import { Category } from "../../data/Category";
import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition';
import { Searchbar } from 'ionic-angular';
import firebase from "firebase";
import { SignInPage } from '../sign-in/sign-in';
@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  @ViewChild('searchbar') searchbar:Searchbar;
  categories: Category[] = [];
  loaded = false;

  isSearching = false;
  searchDone = false;
  searchValue: string = "";
  searchItems: HomeScreenGroupItem[] = [];
  matches:Array<string> = [];
  icon:string = '';
  recentlyAddedMovies: HomeScreenGroupItem[] = [];
  number
  private width:number;
  private heigth:number;
  menu = true;
  menuhead = 'buscar';
  public lottieConfig: Object;  
 currentPageVar = 'home';


  constructor(
    private navCtrl: NavController,
    private speechRecognition: SpeechRecognition,
    private Platform: Platform,
    private vimeoService: VimeoService,
    private loadingCtrl: LoadingController,
    private app: App,
    private zone: NgZone,
  ) {

    this.lottieConfig = {
      path: 'assets/search3.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
  };

    this.icon =  this.Platform.is('cordova') == true ? 'md-mic': 'search';
    Platform.ready().then(() => {
      this.width = Platform.width();
      this.heigth = Platform.height();
      console.log(this.width);
      console.log(this.heigth +'height');
      
      if(this.width <= 992){
        this.menu = true       
      }else{
        this.menu = false
      }     
    });
  }
  
  ionViewDidLoad() {

  

    this.listenForSearchInput(500);
  };

  startListening(){

 
      this.speechRecognition.requestPermission()
      .then(
        () =>{      
  
          let options: SpeechRecognitionListeningOptions = {
            language:'es-Es',
            matches:1,
            showPartial:true,
            showPopup:true
          }
          this.speechRecognition.startListening(options)
        .subscribe(
          (matches: Array<string>) =>{
            console.log(matches)
            this.matches = matches
            this.searchValue = matches[0];
           this.focusMethod();
           this.searchbar.setFocus();
            this.search(matches[0])
          } ,
          (onerror) => console.log(onerror)
        )
        } ,
        () => console.log(onerror)
      ) 
    };

    focusMethod(){
     document.getElementById('searchInput').focus()
    }

  listenForSearchInput(timeoutTime: number): any {
    const searchInput = <HTMLInputElement>(
      document.getElementById("searchInput")
    );

    let timeout = null;

    searchInput.onkeyup = e => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        this.search(this.searchValue);
      }, timeoutTime);
    };
  };

  search(searchValue:string) {
    this.loaded = false;
    this.isSearching = true;
    if (searchValue !== "" && searchValue.length >= 3 && !this.loaded) {      
      this.vimeoService.getAllVideos().subscribe(result =>{
     
        let videos:any = result;
        this.searchItems = [];
        videos.forEach(item => {
       
          let name = this.RemoveAccents(searchValue.toLowerCase());
          if (this.RemoveAccents(item.name.toLowerCase()).indexOf(name) > -1) {
          let video = new HomeScreenGroupItem();          
            video.name = item.name;
            video.picture = item.files[2].link;
            video.description = item.description;
            video.detailsPicture = item.pictures.sizes[6].link_with_play_button;
            video.movieId = item.uri.split('/')[2];
     
           this.searchItems.push(video);
           this.isSearching = false;
          }
          this.loaded = true;
          this.isSearching = false;
        });
        
      },err => console.log(err))
      
      }else if (searchValue === "") {
        this.clearSearch();
      }
    } ; 


  RemoveAccents(str) {
    var accents    = 'ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    str = str.split('');
    var strLen = str.length;
    var i, x;
    for (i = 0; i < strLen; i++) {
      if ((x = accents.indexOf(str[i])) != -1) {
        str[i] = accentsOut[x];
      }
    }
    return str.join('');
  }

  onClear(event) {
    this.clearSearch();
  }

  clearSearch() {
    this.isSearching = false;
    this.searchDone = false;
    this.searchItems = [];
  }

  goToSearchItem(searchItem: SearchItem) {
    this.navCtrl.push("MovieDetailsPage", { movieId: searchItem })
  }

 

  openCategory(category: Category) {
    this.navCtrl.push("GridListPage", { category: category });
  }

////////////////////////////////////////////////////////////////////////////////
 
home() {
  this.navCtrl.setRoot('HomePage');
}

parrilla() {
  this.navCtrl.push('ComingSoonPage')
}

buscar() {
  this.navCtrl.push('SearchPage')
}
perfil() {
  this.navCtrl.push('ProfilePage')
}

signOut() {
  var loading = this.loadingCtrl.create({
    spinner: "bubbles",
    content: "Cerrando sesión..."
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();

    firebase
      .auth()
      .signOut()
      .then(() => {
        this.zone.run(() => {
          this.app.getRootNav().setRoot(SignInPage);
        });
      });
  }, 500);
};

};



