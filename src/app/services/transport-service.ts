import {inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Ride } from '../components/ride-tile/ride-tile';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  private auth = inject(AuthService);
  private _rides$: BehaviorSubject<Ride[]> = new BehaviorSubject<Ride[]>(rides);

  isUserTheAddedRide(ride:Ride){
   return !!this.auth.user?.empId && ride.rideOwner === this.auth.user.empId
  }

  isUserBookedRide(ride:Ride){
   return !!this.auth.user?.empId && ride.bookedEmployees.includes(this.auth.user.empId)
  } 

  openRides$ = this._rides$.pipe(
    map(rides => rides.filter(item => {
      const userNotEligibleToBook = this.isUserBookedRide(item) || this.isUserTheAddedRide(item);
      return item.remainingSeats && !userNotEligibleToBook;
    }).map(item => {
      return { ...item, userNotEligibleToBook: false };
    })
    )
  );

  bookedRides$ = this._rides$.pipe(
    map(rides => rides.filter(item => {
      const bookedByUser = this.isUserBookedRide(item);
      return bookedByUser;
    }).map(item => {
      return { ...item, userNotEligibleToBook: true };
    })
    )
  );

  userAddedRides$ = this._rides$.pipe(
    map(rides => rides.filter(item => {
      const userNotEligibleToBook = this.isUserTheAddedRide(item);
      return userNotEligibleToBook;
    }).map(item => {
      return { ...item, userNotEligibleToBook: true };
    })
    )
  );

  getRides() {
    return this._rides$.asObservable();
  }

  getOpenRides() {
    return this.openRides$;
  }
  
  getBookedRides() {
    return this.bookedRides$;
  }

  getUserAddedRides() {
    return this.userAddedRides$;
  }

    bookRide(ride: Ride) {
    const currentRides = this._rides$.value;
    console.log('dubugging');
    
    currentRides.forEach(item => {
      if (item.rideId == ride.rideId && this.auth.user?.empId) {
        item.bookedEmployees.push(this.auth.user.empId)
        item.remainingSeats -= 1;
      }
    })
    this._rides$.next(currentRides);
  }

}

const rides = [
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-05-1234",
    "vacantSeats": 3,
    "time": "2025-10-02T09:30:00",
    "pickupPoint": "MG Road",
    "destination": "Electronic City",
    "rideId": 1,
    "bookedEmployees": [
      "Emp016"
    ],
    "rideOwner": "Emp01",
    "remainingSeats": 2
  },
  {
    "vehicleType": "Bike",
    "vehicleNo": "KA-03-5678",
    "vacantSeats": 1,
    "time": "2025-10-02T10:15:00",
    "pickupPoint": "Indiranagar",
    "destination": "Whitefield",
    "rideId": 2,
    "bookedEmployees": [],
    "rideOwner": "Emp11",
    "remainingSeats": 1
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-02-2468",
    "vacantSeats": 4,
    "time": "2025-10-02T11:00:00",
    "pickupPoint": "BTM Layout",
    "destination": "Manyata Tech Park",
    "rideId": 3,
    "bookedEmployees": [
      "Emp216"
    ],
    "rideOwner": "Emp21",
    "remainingSeats": 3
  },
  {
    "vehicleType": "Bike",
    "vehicleNo": "KA-01-9999",
    "vacantSeats": 1,
    "time": "2025-10-02T08:45:00",
    "pickupPoint": "Koramangala",
    "destination": "HSR Layout",
    "rideId": 4,
    "bookedEmployees": [
      "Emp316"
    ],
    "rideOwner": "Emp31",
    "remainingSeats": 0
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-04-4321",
    "vacantSeats": 2,
    "time": "2025-10-02T09:50:00",
    "pickupPoint": "Jayanagar",
    "destination": "Majestic",
    "rideId": 5,
    "bookedEmployees": [
      "Emp416"
    ],
    "rideOwner": "Emp41",
    "remainingSeats": 1
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-06-1111",
    "vacantSeats": 3,
    "time": "2025-10-02T07:45:00",
    "pickupPoint": "Hebbal",
    "destination": "Marathahalli",
    "rideId": 6,
    "bookedEmployees": [
      "Emp516"
    ],
    "rideOwner": "Emp51",
    "remainingSeats": 2
  },
  {
    "vehicleType": "Bike",
    "vehicleNo": "KA-07-2222",
    "vacantSeats": 1,
    "time": "2025-10-02T09:20:00",
    "pickupPoint": "KR Puram",
    "destination": "Domlur",
    "rideId": 7,
    "bookedEmployees": [],
    "rideOwner": "Emp61",
    "remainingSeats": 1
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-08-3333",
    "vacantSeats": 2,
    "time": "2025-10-02T12:00:00",
    "pickupPoint": "Banashankari",
    "destination": "ITPL",
    "rideId": 8,
    "bookedEmployees": [
      "Emp716"
    ],
    "rideOwner": "Emp71",
    "remainingSeats": 1
  },
  {
    "vehicleType": "Bike",
    "vehicleNo": "KA-09-4444",
    "vacantSeats": 1,
    "time": "2025-10-02T14:15:00",
    "pickupPoint": "Rajajinagar",
    "destination": "Ulsoor",
    "rideId": 9,
    "bookedEmployees": [
      "Emp816"
    ],
    "rideOwner": "Emp81",
    "remainingSeats": 0
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-10-5555",
    "vacantSeats": 4,
    "time": "2025-10-02T16:30:00",
    "pickupPoint": "Malleshwaram",
    "destination": "Electronic City",
    "rideId": 10,
    "bookedEmployees": [
      "Emp916"
    ],
    "rideOwner": "Emp91",
    "remainingSeats": 3
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-11-6666",
    "vacantSeats": 2,
    "time": "2025-10-02T17:45:00",
    "pickupPoint": "Yeshwanthpur",
    "destination": "Jayanagar",
    "rideId": 11,
    "bookedEmployees": [
      "Emp1016"
    ],
    "rideOwner": "Emp101",
    "remainingSeats": 1
  },
  {
    "vehicleType": "Bike",
    "vehicleNo": "KA-12-7777",
    "vacantSeats": 1,
    "time": "2025-10-02T18:00:00",
    "pickupPoint": "Majestic",
    "destination": "Indiranagar",
    "rideId": 12,
    "bookedEmployees": [
      "Emp1116"
    ],
    "rideOwner": "Emp111",
    "remainingSeats": 0
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-13-8888",
    "vacantSeats": 3,
    "time": "2025-10-02T19:15:00",
    "pickupPoint": "Koramangala",
    "destination": "BTM Layout",
    "rideId": 13,
    "bookedEmployees": [
      "Emp1216"
    ],
    "rideOwner": "Emp121",
    "remainingSeats": 2
  },
  {
    "vehicleType": "Bike",
    "vehicleNo": "KA-14-9999",
    "vacantSeats": 1,
    "time": "2025-10-02T20:00:00",
    "pickupPoint": "HSR Layout",
    "destination": "Bellandur",
    "rideId": 14,
    "bookedEmployees": [
      "Emp1316"
    ],
    "rideOwner": "Emp131",
    "remainingSeats": 0
  },
  {
    "vehicleType": "Car",
    "vehicleNo": "KA-15-1235",
    "vacantSeats": 2,
    "time": "2025-10-02T21:10:00",
    "pickupPoint": "Whitefield",
    "destination": "KR Market",
    "rideId": 15,
    "bookedEmployees": [
      "Emp1416"
    ],
    "rideOwner": "Emp141",
    "remainingSeats": 1
  }
]
