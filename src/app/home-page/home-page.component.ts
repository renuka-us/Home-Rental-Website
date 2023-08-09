import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  selectedCity: string;
  selectedGender: string;
  searchLocation: string;
  constructor(private router: Router) {
    this.selectedCity = 'Pune';
    this.selectedGender = '';
    this.searchLocation = '';
  }
  cities = [
    {
      name: 'Gurgaon',
      locations: [
        { name: 'Sector 14', images:"https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , startingPrice: 10000, numberOfHouses: 200 },
        { name: 'DLF Phase 3', images:"https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , startingPrice: 15000, numberOfHouses: 300 },
        { name: 'Sohna Road', images:"https://images.pexels.com/photos/5825527/pexels-photo-5825527.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 12000, numberOfHouses: 250 },
        { name: 'Sector 56', images: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 9000, numberOfHouses: 150 },
        { name: 'Sector 29', images: "https://images.pexels.com/photos/5711314/pexels-photo-5711314.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 11000, numberOfHouses: 180 },
      { name: 'MG Road', images: "https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", startingPrice: 9500, numberOfHouses: 170 },
      { name: 'Cyber City', images: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60", startingPrice: 13000, numberOfHouses: 220 },
      { name: 'Udyog Vihar', images: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", startingPrice: 10500, numberOfHouses: 190 },
      { name: 'Sector 45', images: "https://images.unsplash.com/photo-1578503439976-f0c1f7daf1cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", startingPrice: 9800, numberOfHouses: 160 },
      { name: 'South City', images: "https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", startingPrice: 11500, numberOfHouses: 200 },
      { name: 'DLF Cyber Hub', images: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60", startingPrice: 13500, numberOfHouses: 230 },
      { name: 'Sector 48', images: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 10000, numberOfHouses: 180 },
      { name: 'Sector 67', images: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 9200, numberOfHouses: 170 }
      ]
    },
    {
      name: 'Pune',
      locations: [
        { name: 'Koregaon Park', images:"https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 18000, numberOfHouses: 400 },
        { name: 'Baner', images:"https://images.pexels.com/photos/3623785/pexels-photo-3623785.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 16000, numberOfHouses: 350 },
        { name: 'Hinjewadi', images:"https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 20000, numberOfHouses: 500 },
        { name: 'Aundh', images: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 14000, numberOfHouses: 300 },
        { name: 'Viman Nagar', images: "https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 16500, numberOfHouses: 380 },
      { name: 'Magarpatta', images: "https://images.unsplash.com/photo-1616046386594-c152babc9e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250", startingPrice: 15000, numberOfHouses: 330 },
      { name: 'Hadapsar', images: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 17500, numberOfHouses: 420 },
      { name: 'Wakad', images: "https://images.unsplash.com/photo-1616137148650-4aa14651e02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 15500, numberOfHouses: 350 },
      { name: 'Kothrud', images: "https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 14500, numberOfHouses: 320 },
      { name: 'Balewadi', images: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 16000, numberOfHouses: 370 },
      { name: 'NIBM', images: "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 17000, numberOfHouses: 390 },
      { name: 'Kharadi', images: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 18000, numberOfHouses: 410 },
      { name: 'Pimple Saudagar', images: "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 15000, numberOfHouses: 330 }
      ]
    },
    {
    name: 'Mumbai',
    locations: [
      { name: 'Bandra', images: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 25000, numberOfHouses: 600 },
      { name: 'Andheri', images: "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 22000, numberOfHouses: 550 },
      { name: 'Powai', images: "https://images.unsplash.com/photo-1609347744403-2306e8a9ae27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 28000, numberOfHouses: 650 },
      { name: 'Malad', images: "https://images.unsplash.com/photo-1557592722-a0a649c8c5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 20000, numberOfHouses: 500 },
      { name: 'Goregaon', images: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 23000, numberOfHouses: 580 },
      { name: 'Juhu', images: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 21000, numberOfHouses: 530 },
      { name: 'Dadar', images: "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 24000, numberOfHouses: 610 },
      { name: 'Worli', images: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 22000, numberOfHouses: 560 },
      { name: 'Chembur', images: "https://images.unsplash.com/photo-1618219944342-824e40a13285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 20000, numberOfHouses: 500 },
      { name: 'Colaba', images: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 25000, numberOfHouses: 600 },
      { name: 'Thane', images: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 26000, numberOfHouses: 620 },
      { name: 'Vashi', images: "https://images.unsplash.com/photo-1616046386594-c152babc9e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&h=250&q=60", startingPrice: 24000, numberOfHouses: 590 }
    ]
  },
    {
      name: 'Nashik',
      locations: [
        { name: 'Panchavati', images:"https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250" , startingPrice: 8000, numberOfHouses: 200 },
        { name: 'Indira Nagar', images:"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250" , startingPrice: 7000, numberOfHouses: 150 },
        { name: 'College Road', images:"https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250" , startingPrice: 9000, numberOfHouses: 250 },
        { name: 'Gangapur Road', images:"https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250" , startingPrice: 10000, numberOfHouses: 180 },
      { name: 'Nashik Road', images: "https://images.pexels.com/photos/2656398/pexels-photo-2656398.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250", startingPrice: 4800, numberOfHouses: 75 },
      { name: 'CIDCO', images: "https://images.pexels.com/photos/2660123/pexels-photo-2660123.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250", startingPrice: 4300, numberOfHouses: 65 },
      { name: 'Deolali Camp', images: "https://images.pexels.com/photos/2674697/pexels-photo-2674697.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250", startingPrice: 3800, numberOfHouses: 55 },
      { name: 'Satpur', images: "https://images.pexels.com/photos/2674800/pexels-photo-2674800.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250", startingPrice: 3300, numberOfHouses: 45 },
      { name: 'Sharanpur Road', images: "https://images.pexels.com/photos/2674883/pexels-photo-2674883.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250", startingPrice: 4600, numberOfHouses: 72 },
      { name: 'Upnagar', images: "https://images.pexels.com/photos/2718252/pexels-photo-2718252.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&h=250", startingPrice: 4100, numberOfHouses: 62 },
      ]
    },

    {
      name: 'Nagpur',
      locations: [
        { name: 'Dharampeth', images:"https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 12000, numberOfHouses: 300 },
        { name: 'Ram Nagar', images:"https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 9000, numberOfHouses: 200 },
        { name: 'Wardha Road', images:"https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 10000, numberOfHouses: 250 },
        { name: 'Sitabuldi', images: "https://images.pexels.com/photos/15848137/pexels-photo-15848137/free-photo-of-kitchen-with-living-room.png?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 11000, numberOfHouses: 220 },
        { name: 'Dhantoli', images: "https://images.pexels.com/photos/1268844/pexels-photo-1268844.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 8500, numberOfHouses: 160 },
      { name: 'Wardha Road', images: "https://images.pexels.com/photos/186020/pexels-photo-186020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 9000, numberOfHouses: 180 },
      { name: 'Hingna Road', images: "https://images.pexels.com/photos/1786610/pexels-photo-1786610.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 7500, numberOfHouses: 140 },
      { name: 'Pratap Nagar', images: "https://images.pexels.com/photos/1370944/pexels-photo-1370944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 8000, numberOfHouses: 150 },
      { name: 'Trimurti Nagar', images: "https://images.pexels.com/photos/1268824/pexels-photo-1268824.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 7000, numberOfHouses: 120 },
      { name: 'Sadar', images: "https://images.pexels.com/photos/207246/pexels-photo-207246.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 6500, numberOfHouses: 100 },
      { name: 'Somalwada', images: "https://images.pexels.com/photos/1268835/pexels-photo-1268835.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 7500, numberOfHouses: 130 },
      { name: 'Jaripatka', images: "https://images.pexels.com/photos/1268814/pexels-photo-1268814.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 8500, numberOfHouses: 160 },
      { name: 'Nandanvan', images: "https://images.pexels.com/photos/1070058/pexels-photo-1070058.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 9000, numberOfHouses: 180 },
      { name: 'Manewada', images: "https://images.pexels.com/photos/1268816/pexels-photo-1268816.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 7500, numberOfHouses: 140 },
      ]
    },
    {
      name: 'Amravati',
      locations: [
        { name: 'Rajapeth', images:"https://images.pexels.com/photos/1879069/pexels-photo-1879069.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 8000, numberOfHouses: 200 },
        { name: 'Mehadia Square', images:"https://images.pexels.com/photos/15848139/pexels-photo-15848139/free-photo-of-furniture-in-cozy-living-room.png?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 9000, numberOfHouses: 250 },
        { name: 'Walgaon Road', images:"https://images.pexels.com/photos/3946658/pexels-photo-3946658.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 7500, numberOfHouses: 180 },
        { name: 'Jaistambh Chowk', images: "https://images.pexels.com/photos/2547555/pexels-photo-2547555.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 8500, numberOfHouses: 220 },
        { name: 'Camp', images: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 5500, numberOfHouses: 90 },
      { name: 'Chandan Nagar', images: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 5000, numberOfHouses: 80 },
      { name: 'Walgaon Road', images: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 4500, numberOfHouses: 70 },
      { name: 'Bhagyanagar', images: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 4000, numberOfHouses: 50 },
      { name: 'Rajendra Nagar', images: "https://images.unsplash.com/photo-1616137148650-4aa14651e02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 5500, numberOfHouses: 90 },
      { name: 'Dastur Nagar', images: "https://images.unsplash.com/photo-1616137148650-4aa14651e02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 5000, numberOfHouses: 80 },
      { name: 'Jaistambh Chowk', images: "https://images.unsplash.com/photo-1557592722-a0a649c8c5c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 4500, numberOfHouses: 70 },
      { name: 'Indira Nagar', images: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&h=250&q=60", startingPrice: 4000, numberOfHouses: 50 },
      ]
    },
    {
      name: 'Delhi',
      locations: [
        { name: 'Karol Bagh', images:"https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 18000, numberOfHouses: 400 },
        { name: 'Lajpat Nagar', images:"https://images.pexels.com/photos/1579262/pexels-photo-1579262.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 20000, numberOfHouses: 500 },
        { name: 'Dwarka', images:"https://images.pexels.com/photos/6444269/pexels-photo-6444269.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 16000, numberOfHouses: 350 },
        { name: 'Rajouri Garden', images: "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 14000, numberOfHouses: 300 },
        { name: 'Rohini', images: "https://images.pexels.com/photos/1639483/pexels-photo-1639483.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 14000, numberOfHouses: 250 },
      { name: 'Connaught Place', images: "https://images.pexels.com/photos/1641817/pexels-photo-1641817.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 16000, numberOfHouses: 350 },
      { name: 'Mayur Vihar', images: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 12500, numberOfHouses: 220 },
      { name: 'Vasant Kunj', images: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 13500, numberOfHouses: 240 },
      { name: 'Pitampura', images: "https://images.pexels.com/photos/259944/pexels-photo-259944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 11500, numberOfHouses: 180 },
      { name: 'Nehru Place', images: "https://images.pexels.com/photos/318315/pexels-photo-318315.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 14500, numberOfHouses: 280 },
      { name: 'Gurgaon', images: "https://images.pexels.com/photos/2079245/pexels-photo-2079245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 12000, numberOfHouses: 200 },
      { name: 'Noida', images: "https://images.pexels.com/photos/2079244/pexels-photo-2079244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 13000, numberOfHouses: 230 },
      ]
    },
    {
      name: 'Bangalore',
      locations: [
        { name: 'Koramangala', images:"https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 22000, numberOfHouses: 450 },
        { name: 'Indiranagar', images:"https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 20000, numberOfHouses: 400 },
        { name: 'Whitefield', images:"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400&h=250" , startingPrice: 25000, numberOfHouses: 500 },
        { name: 'BTM Layout', images: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 18000, numberOfHouses: 350 },
        { name: 'Malleshwaram', images: "https://images.pexels.com/photos/2292959/pexels-photo-2292959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 17000, numberOfHouses: 380 },
      { name: 'HSR Layout', images: "https://images.pexels.com/photos/2292954/pexels-photo-2292954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 19000, numberOfHouses: 420 },
      { name: 'Marathahalli', images: "https://images.pexels.com/photos/2292955/pexels-photo-2292955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", startingPrice: 17500, numberOfHouses: 390 },
      { name: 'BTM Layout', images: "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 15500, numberOfHouses: 330 },
      { name: 'Electronic City', images: "https://images.pexels.com/photos/2102434/pexels-photo-2102434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 16500, numberOfHouses: 360 },
      { name: 'Bannerghatta Road', images: "https://images.pexels.com/photos/2292939/pexels-photo-2292939.jpeg?auto=compress&cs=tinysrgb&w=400&h=250", startingPrice: 18500, numberOfHouses: 410 },
      ]
    }
  ];
  onSelectCity(event: any): void {
    this.selectedCity = event.target.value;
    console.log('Selected city:', this.selectedCity);
  }
  searchingLocation(event: any): void {
    this.searchLocation = event.target.value;
    console.log('Search city:', this.searchLocation);
  }

  getLocationsForCity(city: string): any[] {
    const selectedCity = this.cities.find(c => c.name === city);
    return selectedCity ? selectedCity.locations : [];
  }
  navigateToDetails(locationname: string, city:string) {
    this.router.navigate(['/home-details', locationname,city]);
  
  }
  
}
