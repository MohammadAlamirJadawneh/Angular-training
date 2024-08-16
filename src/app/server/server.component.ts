import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.scss',
})
export class ServerComponent {
  // interpolation string
  serverId: number = 10;
  serverStatus: string = 'online';
  getServerStatus() {
    if (this.serverStatus == 'online') {
      return 'Our server is online';
    } else {
      return 'our server is sleep';
    }
  }
  // Property Binding
  allowAddServer: boolean = true;

  //Event Binding
  serverCreationStatus: string = 'No Server was Created';
  // onCreatedServer() {
  //   this.serverCreationStatus = 'server Created Successfully';
  // }

  //two way binding
  serverName: string = 'Test Server';

  //ngIF
  isServerCreated: boolean = false;
  // onCreatedServer() {
  //   this.serverCreationStatus = 'server Created Successfully';
  //   this.isServerCreated = true;
  // }

  //ngStyle
  serverStyles = {
    'background-color': 'red',
    color: 'white',
    'font-style': 'italic',
  };

  //ngClass
  isSpecial: boolean = true;
  isSuccess: boolean = true;
  serverClasses = {
    success: this.isSuccess,
    special: this.isSpecial,
  };

  //ngFor
  Servers = ['test server 1 ', 'test server 2'];
  onCreatedServer() {
    this.Servers.push(this.serverName);
  }
}
