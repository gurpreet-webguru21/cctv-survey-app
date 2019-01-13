import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { finalize } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation';

/**
* Generated class for the DetailsFormPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-details-form',
  templateUrl: 'details-form.html',
})
export class DetailsFormPage {
  
  public cctvDetails: any = {
    name: '',
    address: '',
    cctvId: '',
    latitude: '',
    longitude: ''
  };
  
  isLoading:boolean;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private apiService: ApiServiceProvider,
    private toastCtrl: ToastController,
    private geolocation: Geolocation) {
      
      // Get current geolocation of device 
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp)
        this.cctvDetails.latitude = resp.coords.latitude;
        this.cctvDetails.longitude = resp.coords.longitude;
       }).catch((error) => {
         console.log('Error getting location', error);
       });

    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad DetailsFormPage');
    }
    
    // Submit data
    submitForm(){

      let toast = this.toastCtrl.create({
        message: 'Details submitted succesfully.',
        duration: 3000,
        position: 'top'
      });
      
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
        this.navCtrl.pop();
        this.isLoading = false;
      });
      
      this.isLoading = true;

      setTimeout(() => { toast.present(); }, 2000); // ...comment this for api testing

      //......... Uncomment lines below for api testing .............
      // this.apiService
      // .submitData(this.cctvDetails)
      // .pipe(
      //   finalize(() => {
      //     setTimeout(() => {
      //       this.isLoading = false;
      //     }, 2000);
      //   })
      //   )
      //   .subscribe((data: any) => {
      //     toast.present();
      //   });
      }
      
    }
    