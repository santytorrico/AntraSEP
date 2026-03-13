import { Component} from '@angular/core';

@Component({
  selector: 'app-flight-booker',
  standalone: false,
  templateUrl: './flight-book.html',
  styleUrl: './flight-book.scss',
})
export class FlightBook {
  tripType: string = 'oneWay';
  departureDate = '';
  returnDate = '';

  message = '';

  submitBooking(){
    console.log("submit clicked")
    const today = new Date();
    today.setHours(0,0,0,0);

    const depDate = new Date(this.departureDate);
    const retDate = new Date(this.returnDate);
                                                                                          
    if (depDate < today) {
      this.message = "Departure date cannot be in the past.";
      return;
    }

    if (this.tripType === 'roundTrip' && retDate < depDate) {
      this.message = "Return date cannot be before departure date.";
      return;
    }

    if (this.tripType === 'oneWay') {
      this.message =
        `You have booked a one-way flight on ${this.departureDate}`;
    }

    if (this.tripType === 'roundTrip') {
      this.message =
        `You have booked a return flight, departing on ${this.departureDate} and returning on ${this.returnDate}`;
    }
  }
}
