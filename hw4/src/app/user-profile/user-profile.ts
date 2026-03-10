import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  name: string = '';
  email: string = '';
  dateOfBirth: string = '';
  saveCount: number = 0;

  resetForm() {
    this.name = '';
    this.email = '';
    this.dateOfBirth = '';
  }

  saveProfile() {
    const profile = {
      name: this.name,
      email: this.email,
      dateOfBirth: this.dateOfBirth
    };

    console.log(profile);
    this.saveCount++;
  }

  isEmpty(): boolean {
    return !this.name && !this.email && !this.dateOfBirth;
  }

}
