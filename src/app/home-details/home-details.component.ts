import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent {
  selectedCity;
  selectedGender;
  searchLocation;
  cityofLocation;
  location: any;
  constructor(private router: Router,private route: ActivatedRoute){
    this.selectedCity = 'Pune';
    this.selectedGender = '';
    this.searchLocation = '';
    this.cityofLocation = '';
     
  };
    
  homeDetails = [
    {
      "name": "Sai Samrat Apartment",
      "image": "https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg",
      "rent": 14000,
      "contact": "123-456-7890",
      "type": "2BHK",
      "furnishing": "Fully-furnished",
      "area": 700,
      "parking": "Available",
      "address": "Shop No 1, Mariplex Mall, Marigold, Near Axis Bank",
      "description": "This is an excellent 2 BHK house for rent in Wadgaon Sheri, Pune. It is a part of Sai Samrat Apartment and is 3 years old. This house is available for boys. This house has a 24*7 security guard and lift facility."
    },
    {
      "name": "Royal Heights",
      "image": "https://images.pexels.com/photos/6444269/pexels-photo-6444269.jpeg",
      "rent": 18000,
      "contact": "987-654-3210",
      "type": "3BHK",
      "furnishing": "Semi-furnished",
      "area": 1200,
      "parking": "Available",
      "address": "ABC Colony, Near City Center",
      "description": "This is a spacious 3 BHK house for rent in ABC Colony, Pune. It is a part of Royal Heights and is newly constructed. This house is available for families. It has a dedicated parking space and is close to the City Center."
    },
    {
      "name": "Graceful Homes",
      "image": "https://images.pexels.com/photos/1579262/pexels-photo-1579262.jpeg",
      "rent": 9000,
      "contact": "555-123-4567",
      "type": "1BHK",
      "furnishing": "Unfurnished",
      "area": 500,
      "parking": "Not Available",
      "address": "XYZ Society, Near Market",
      "description": "This is a cozy 1 BHK house for rent in XYZ Society, Pune. It is a part of Graceful Homes and is suitable for small families or individuals. The house is unfurnished, allowing you to personalize it according to your preferences."
    },
    {
      "name": "Sunrise Apartments",
      "image": "https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg",
      "rent": 11000,
      "contact": "999-888-7777",
      "type": "2BHK",
      "furnishing": "Semi-furnished",
      "area": 800,
      "parking": "Available",
      "address": "MNO Society, Near Park",
      "description": "This is a spacious 2 BHK house for rent in MNO Society, Pune. It is a part of Sunrise Apartments and is located near a beautiful park. The house comes with some basic furnishings, making it convenient for immediate occupancy."
    },
    {
      "name": "Green Valley Residency",
      "image": "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
      "rent": 20000,
      "contact": "777-999-5555",
      "type": "3BHK",
      "furnishing": "Fully-furnished",
      "area": 1500,
      "parking": "Available",
      "address": "PQR Society, Near School",
      "description": "This is a luxurious 3 BHK house for rent in PQR Society, Pune. It is a part of Green Valley Residency and offers a fully-furnished living space. The house is located near a reputed school, making it convenient for families with children."
    },
    {
      "name": "Sunflower Homes",
      "image": "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
      "rent": 8000,
      "contact": "111-222-3333",
      "type": "1HK",
      "furnishing": "Semi-furnished",
      "area": 400,
      "parking": "Available",
      "address": "LMN Colony, Near Hospital",
      "description": "This is a cozy 1HK house for rent in LMN Colony, Pune. It is a part of Sunflower Homes and is suitable for individuals or couples. The house comes with some basic furnishings and is conveniently located near a hospital."
    },
    {
      "name": "Garden View Apartments",
      "image": "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg",
      "rent": 25000,
      "contact": "444-555-6666",
      "type": "2BHK",
      "furnishing": "Fully-furnished",
      "area": 1000,
      "parking": "Available",
      "address": "RST Society, Near Shopping Mall",
      "description": "This is a spacious 2 BHK house for rent in RST Society, Pune. It is a part of Garden View Apartments and offers a fully-furnished living space. The house is located near a shopping mall, providing easy access to various amenities."
    },
    {
      "name": "Lakeview Villa",
      "image": "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg",
      "rent": 12000,
      "contact": "222-333-4444",
      "type": "1BHK",
      "furnishing": "Unfurnished",
      "area": 600,
      "parking": "Not Available",
      "address": "UVW Society, Near Lake",
      "description": "This is a beautiful 1 BHK house for rent in UVW Society, Pune. It is a part of Lakeview Villa and offers scenic views of the nearby lake. The house is unfurnished, allowing you to customize it according to your preferences."
    },
    {
      "name": "Platinum Residences",
      "image": "https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg",
      "rent": 16000,
      "contact": "666-777-8888",
      "type": "3BHK",
      "furnishing": "Semi-furnished",
      "area": 1300,
      "parking": "Available",
      "address": "JKL Society, Near Gym",
      "description": "This is a spacious 3 BHK house for rent in JKL Society, Pune. It is a part of Platinum Residences and offers a semi-furnished living space. The house is located near a gym, making it convenient for fitness enthusiasts."
    },
    {
      "name": "Paradise Homes",
      "image": "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg",
      "rent": 9000,
      "contact": "888-777-6666",
      "type": "2BHK",
      "furnishing": "Unfurnished",
      "area": 750,
      "parking": "Available",
      "address": "FGH Colony, Near Park",
      "description": "This is a comfortable 2 BHK house for rent in FGH Colony, Pune. It is a part of Paradise Homes and is suitable for small families. The house is unfurnished, providing you the freedom to decorate it as per your taste."
    }
  ];

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.location = params['location'];
      this.cityofLocation = params['city'];
    

  });
}

  onSelectCity(event: any): void {
    this.selectedCity = event.target.value;
    console.log('Selected city:', this.selectedCity);
  }

}
