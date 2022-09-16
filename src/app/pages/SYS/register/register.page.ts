import { Component } from '@angular/core';
import { PageBase } from 'src/app/page-base';
import { EnvService } from 'src/app/services/core/env.service';
import { AccountService } from 'src/app/services/account.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends PageBase {

    constructor(
        public env: EnvService,
        public accountService: AccountService,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
    ) {
        super();
        this.item = {
            // FullName: 'Mạc Thị Bưởi',
            // EmailAddress: 'host@codeart.vn',
            // PhoneNumber: '0908061119',
            // Password:'123123',
            // ConfirmPassword: '123123'
        };
    }

    events(e){
        if(e.Code == 'app:loadedLocalData' || e.Code == 'app:updatedUser'){
            this.preLoadData();
        }
    }

    preLoadData(){
        if(this.env.user && this.env.user.Id){
            this.nav( '/', 'back');
        }
    }
    

    register(){
        let message = 'Vui lòng nhập ';
        let validateMessage = [];
        if(!this.item.FullName){
            validateMessage.push('họ và tên');
        }
        // if(!this.item.DOB){
        //     validateMessage.push('ngày sinh');
        // }
        if(!this.item.EmailAddress){
            validateMessage.push('email');
        }
        if(!this.item.PhoneNumber){
            validateMessage.push('số điện thoại');
        }
        if(!this.item.Password){
            validateMessage.push('mật khẩu');
        }
        if(!this.item.ConfirmPassword){
            validateMessage.push('xác nhận mật khẩu');
        }
        if(this.item.Password && this.item.ConfirmPassword && this.item.Password != this.item.ConfirmPassword){
            validateMessage.push('lại xác nhận mật khẩu');
        }

        if(validateMessage.length){
            message += validateMessage.join(', ');
            this.env.showMessage(message, 'danger');
            return;
        }
        
        this.postRegister();

        
    }

    postRegister(){
        this.loadingCtrl.create({
            message: 'Vui lòng chờ đăng nhập và đồng bộ dữ liệu...'
        }).then(loading => {
            loading.present();

            this.accountService.register(this.item.EmailAddress, this.item.Password, this.item.ConfirmPassword, this.item.PhoneNumber, this.item.FullName)
			.then(data => {
				loading.dismiss();
			})
			.catch(err => {
				loading.dismiss();
				let message = '';
				if (err.error && err.error.ModelState[""] && err.error.ModelState[""].toString().indexOf("already taken")) {
					message = 'Email ' + this.item.EmailAddress + ' đã được đăng ký, vui lòng đăng nhập hoặc đăng ký bằng email khác.'
				}
				else{
					message = 'Đăng ký không thành công, vui lòng thử lại.';
				}

				this.env.showMessage(message);
            });
            
        });
          

        
    }


}
