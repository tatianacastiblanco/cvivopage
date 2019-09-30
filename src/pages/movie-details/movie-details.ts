import { HomeScreenGroupItem } from './../../data/HomeScreenGroupItem';
import { VimeoService } from './../../services/VimeoService';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavParams,
  NavController,
  ToastController,
  AlertController,
  Platform
} from "ionic-angular";
import {
  StreamingVideoOptions,
  StreamingMedia
} from "@ionic-native/streaming-media";

import { MoviesService } from "../../services/MoviesService";
import { UserService } from "../../services/UserService";
import { AuthService } from "../../services/AuthService";

import { Movie } from "../../data/Movie";
import { Helper } from "../../data/Helper";
import { DownloadService } from "../../services/DownloadService";
import { HomeScreenGroup } from '../../data/HomeScreenGroup';
import { ImageLoaderConfig } from 'ionic-image-loader';

@IonicPage()
@Component({
  selector: "page-movie-details",
  templateUrl: "movie-details.html"
})
export class MovieDetailsPage {
  userId: string = "";
  movieId: string = "";
  urlPathVideo: string = "";
  movie: Movie;
  homeScreenGroups: HomeScreenGroup[] = [];
  recentlyAddedMovies: HomeScreenGroupItem[] = [];
  title: string;
  detailsPicture: string;
  releaseYear: string;
  rating: string;
  description: string;

  loaded = false;
  isPartOfMyList = false;

  isDownloading = false;
  isDownloaded = false;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private streamingMedia: StreamingMedia,
    private moviesService: MoviesService,
    private userService: UserService,
    private downloadService: DownloadService,
    private toastController: ToastController,
    private alertController: AlertController,
    private platform: Platform,
    private vimeoService:VimeoService,
    private authService: AuthService,
    private imageLoaderConfig: ImageLoaderConfig
  ) {

    this.imageLoaderConfig.enableDebugMode();
    this.imageLoaderConfig.setCacheDirectoryName('my-custom-cache-directory-name');

    this.authService.afAuth.user.subscribe(user => {
      this.userId = user.uid;
    });

    this.movie = this.navParams.get("movieId");

    // if (this.movieId == undefined) {
    //   this.movieId = "";
    // } else {
    //   this.downloadService
    //     .isMovieDownloaded(this.movieId)
    //     .then((result: any) => {
    //       this.isDownloaded = result.isDownloaded;
    //     });
    // }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieDetailsPage");

    this.getMovie();
     this.getRecentlyAddedMovies();
  }

  getMovie() {  

      this.title = this.movie.name;
      this.detailsPicture = this.movie.detailsPicture;
      this.description = this.movie.description;  
      this.urlPathVideo = this.movie.picture;
      this.movieId = this.movie.movieId;
 

     this.getIsPartOfMyList();
  }

  getCategoryMovies(){
    this.vimeoService.getHomeScreenGroups().subscribe(result => {
      this.homeScreenGroups = []
      let category:any = result;

      console.log(category);
      
    })
  }
  getRecentlyAddedMovies() {

    this.vimeoService.getAllVideos().subscribe(result =>{      
      let videos:any = result
      videos.forEach(item => {
        if(item.files[2] && item.pictures.sizes[3]){
          let video = new HomeScreenGroupItem();
          video.name = item.name;
          video.picture = item.files[2].link;
          video.description = item.description;
          video.detailsPicture = item.pictures.sizes[6].link;
          video.movieId = item.uri.split('/')[2];
      
  
          this.recentlyAddedMovies.push(video)
           this.recentlyAddedMovies = Helper.shuffle(this.recentlyAddedMovies);
        }
       
      });
      this.loaded = true;
    },err => console.log(err))
    // this.moviesService.getRecentlyAddedMovies().then((result: any) => {
    //   this.recentlyAddedMovies = Helper.shuffle(result.movies);
    // 
    // });
   
  }

  getIsPartOfMyList() {


    console.log('test')
    
    this.userService
      .getIsMoviePartOfMyList(this.userId, this.movieId)
      .then((result: any) => {
        this.isPartOfMyList = result.isPartOfMyList;
      });
  }

  addToMyList() {
    this.userService
      .addMovieToMyList(this.userId, this.movie)
      .then((result: any) => {
        this.isPartOfMyList = true;
        this.showPartOfMyListToast(true);
      });
  }

  removeFromMyList() {
    this.userService
      .removeMovieFromMyList(this.userId, this.movieId)
      .then((result: any) => {
        this.isPartOfMyList = false;
        this.showPartOfMyListToast(false);
      });
  }

  showPartOfMyListToast(added: boolean) {
    let toast = this.toastController.create({
      message: added ? "Agregado a mi lista" : "Removido de mi lista",
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }

  goToMovie(movie: Movie) {
    //this.navCtrl.push("MovieDetailsPage", { movieId: movie });
    this.navCtrl.pop().then(() =>{
      this.navCtrl.push("MovieDetailsPage", { movieId: movie });
    })
  }

  private newMethod() {
    return "MovieDetailsPage";
  }
  // playMovie() {
  //   if (!this.platform.is("cordova")) {
  //     let alert = this.alertController.create({
  //       title: "Run on device",
  //       subTitle: "This feature is only available on a device!",
  //       buttons: ["Dismiss"]
  //     });

  //     alert.present();
  //     return;
  //   }
    
    // if (this.movie.videoUrl === "") {
    //   let alert = this.alertController.create({
    //     title: "This movie has not yet been uploaded!",
    //     subTitle:
    //       "Use the Admin Ion Netflix to add the movie and watch it here!",
    //     buttons: ["Dismiss"]
    //   });

    //   alert.present();
    //   return;
    // }

    // let options: StreamingVideoOptions = {
    //   successCallback: () => {
    //     console.log("Video played");
    //   },

    //   errorCallback: e => {
    //     console.log("Error streaming");
    //   },

    //   orientation: "landscape",
    //   shouldAutoClose: true,
    //   controls: true
    // };

    // this.streamingMedia.playVideo(this.movie.videoUrl, options);
  // }

  // downloadMovie() {
  //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
  //   if (!this.platform.is("cordova")) {
  //     this.showDownloadOnDeviceOnlyToast();
  //     return false;
  //   }

    // if (this.movie.videoUrl === "") {
    //   let alert = this.alertController.create({
    //     title: "This movie has not yet been uploaded!",
    //     subTitle:
    //       "Use the Admin Ion Netflix to add the movie and download it here!",
    //     buttons: ["Dismiss"]
    //   });

    //   alert.present();
    //   return;
    // }

    // this.isDownloading = true;

    // this.downloadService.movieFileTransfer.onProgress(event => {
    //   var progress = Math.round((event.loaded / event.total) * 100);
    //   document.getElementById("progressText").innerText = progress + "%";
    // });

    // this.downloadService.downloadMovie(this.movie).then(
    //   (result: any) => {
    //     this.showDownloadToast(this.movie.name);
    //     this.isDownloading = false;
    //     this.isDownloaded = true;
    //   },
    //   (error: any) => {
    //     this.isDownloading = false;
    //   }
    // );
  }

  // showDownloadOnDeviceOnlyToast() {
  //   let toast = this.toastController.create({
  //     message: 'You can only download on a device!',
  //     duration: 2000,
  //     position: "bottom"
  //   });

  //   toast.present();
  // }

  // showDownloadToast(movieName: string) {
  //   let toast = this.toastController.create({
  //     message: 'Movie "' + movieName + '" successfully downloaded!',
  //     duration: 2000,
  //     position: "bottom"
  //   });

  //   toast.present();
  // }

