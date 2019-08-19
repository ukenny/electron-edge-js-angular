import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CsharpFrameworkService {
  edge;
  private getAppDomainDirectory;
  private getCurrentTime;
  private useDynamicInput;

  constructor(private electronService: ElectronService) {
    this.edge = electronService.remote.getGlobal('edge');
    this.getAppDomainDirectory = this.edge.func({
      // tslint:disable-next-line: max-line-length
      assemblyFile: 'W:\\Electron\\electron-edge-js-angular-quick-start\\angular-electron-4.3.0\\c-sharp\\QuickStart\\QuickStart.Framework\\bin\\Debug\\QuickStart.Framework.dll',
      typeName: 'QuickStart.Framework.FrameworkExample',
      methodName: 'GetAppDomainDirectory'
    });
    this.getCurrentTime = this.edge.func({
      // tslint:disable-next-line: max-line-length
      assemblyFile: 'W:\\Electron\\electron-edge-js-angular-quick-start\\angular-electron-4.3.0\\c-sharp\\QuickStart\\QuickStart.Framework\\bin\\Debug\\QuickStart.Framework.dll',
      typeName: 'QuickStart.Framework.FrameworkExample',
      methodName: 'GetCurrentTime'
    });
    this.useDynamicInput = this.edge.func({
      // tslint:disable-next-line: max-line-length
      assemblyFile: 'W:\\Electron\\electron-edge-js-angular-quick-start\\angular-electron-4.3.0\\c-sharp\\QuickStart\\QuickStart.Framework\\bin\\Debug\\QuickStart.Framework.dll',
      typeName: 'QuickStart.Framework.FrameworkExample',
      methodName: 'UseDynamicInput'
    });
  }

  appDomainDirectoryGet(argument, callback) {
    console.log(argument);
    this.getAppDomainDirectory(argument, async(error, result) => {
      if(error) {
        console.log(error);
      } else {
        console.log(result);
        callback();
      }
    });
  }

  currentTimeGet(argument, callback) {
    this.getCurrentTime(argument, async(error, result) => {
      if(error) {
        console.log(error);
      } else {
        console.log(result);
        callback();
      }
    });
    }
    dynamicInputUse(argument, callback) {
      this.useDynamicInput(argument, async (error, result) => {
        if(error) {
          console.log(error);
        } else {
          console.log(result);
          callback();
        }
      });
  }
}

