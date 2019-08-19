import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { CsharpFrameworkService } from './csharp-framework.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public electronService: ElectronService, private csharpframework: CsharpFrameworkService,
    private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
      csharpframework.currentTimeGet('', (res, error) => {
        if(error) {
          console.log(error);
        }
      })
      csharpframework.appDomainDirectoryGet('', (res, error) => {
        if(error) {
          console.log(error);
        }
      });
      csharpframework.dynamicInputUse('Javascript', (res, error) => {
        if(error) {
          console.log(error);
        }
      })
    } else {
      console.log('Mode web');
    }
  }
}
