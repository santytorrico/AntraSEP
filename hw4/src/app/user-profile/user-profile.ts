import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl('')
  });
  saveCount = 0;

  resetForm() {
    this.profileForm.reset();
  }

  saveProfile() {
    console.log(this.profileForm.value);
    this.saveCount++;
  }

  isEmpty(): boolean {
    const {name, email, dateOfBirth} = this.profileForm.value;

    return !name && !email && !dateOfBirth;
  }

}
