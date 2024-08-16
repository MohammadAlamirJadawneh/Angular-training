import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss',
})
export class Task1Component {
  userName: string = 'mohammad jadawneh';
  isButtonDisabled: boolean = true;

  onUsernameChange(value: string): void {
    this.userName = value;
    this.isButtonDisabled = this.userName.length != 0; // Disable button if username is empty
  }
  onClick() {
    this.userName = '';
    this.isButtonDisabled = false;
  }

  checkDisplay: boolean = false;
  buttonClick: number[] = [];
  itemsFromFifth: number[] = [];
  Counter: number = 0;
  onCheckDisplay() {
    this.checkDisplay = !this.checkDisplay;
    this.buttonClick.push(++this.Counter);
    this.itemsFromFifth = this.buttonClick.slice(4);
  }

  buttonClickStyles = {
    'background-color': 'blue',
  };
  isbuttonClickClasses: boolean = true;
  buttonClickClasses = {
    buttonClickClasses: this.isbuttonClickClasses,
  };
}
