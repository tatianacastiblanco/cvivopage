import { Helper } from './../../data/Helper';
import { HomeScreenGroupItem } from './../../data/HomeScreenGroupItem';
import { VimeoService } from './../../services/VimeoService';
import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, Platform, LoadingController, App } from 'ionic-angular';

import { CategoriesService } from "../../services/CategoriesService";
import { MoviesService } from "../../services/MoviesService";
import { TvShowsService } from "../../services/TvShowsService";

import { SearchItem } from "../../data/SearchItem";
import { Category } from "../../data/Category";
import { Movie } from "../../data/Movie";
import { TvShow } from "../../data/TvShow";
import { SpeechRecognition, SpeechRecognitionListeningOptions } from '@ionic-native/speech-recognition';
import { Searchbar } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ComingSoonPage } from '../coming-soon/coming-soon';
import { ProfilePage } from '../profile/profile';
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


  constructor(
    private navCtrl: NavController,
    private categoriesService: CategoriesService,
    private moviesService: MoviesService,
    private speechRecognition: SpeechRecognition,
    private tvShowsService: TvShowsService,
    private Platform: Platform,
    private vimeoService: VimeoService,
    private loadingCtrl: LoadingController,
    private app: App,
    private zone: NgZone,
  ) {

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
    console.log("ionViewDidLoad SearchPage");

    this.listenForSearchInput(500);
    this.getCategories();
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


  
  

  search(searchValue: string) {
    this.isSearching = true;

    if (searchValue !== "" && searchValue.length >= 3) {
      this.searchItems = [];

      // Search movies first /////////////////////////////


      this.vimeoService.getAllVideos().subscribe(result =>{
    

        let videos:any = result
        videos.forEach(item => {

          if (
            item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
           
          ) {
          let video = new HomeScreenGroupItem();          
            video.name = item.name;
            video.picture = item.files[2].link;
            video.description = item.description;
            video.detailsPicture = item.pictures.sizes[3].link;
            video.movieId = item.uri.split('/')[2];
     
           this.searchItems.push(video);
          }
        });
        this.loaded = true;
      },err => console.log(err))

      ////////////////////////////////
    
    } else if (searchValue === "") {
      this.clearSearch();
    }
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

  getCategories() {
    this.categoriesService.getCategories().then((result: any) => {
      this.categories = result.categories;
      this.loaded = true;
    });
  }

  openCategory(category: Category) {
    this.navCtrl.push("GridListPage", { category: category });
  }

////////////////////////////////////////////////////////////////////////////////

getRecentlyAddedMovies() { 
 
}

  home() {
    this.navCtrl.setRoot(HomePage);
  }
  
  parrilla() {
    this.navCtrl.push(ComingSoonPage)
  }

  perfil() {
    this.navCtrl.push(ProfilePage)
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



