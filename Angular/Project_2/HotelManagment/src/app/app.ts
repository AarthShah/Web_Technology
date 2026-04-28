import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Hotel {
  id: number;
  name: string;
  location: string;
  rooms: number;
  price: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hotel Management');
  
  hotels = signal<Hotel[]>([]);
  hotelName = signal('');
  hotelLocation = signal('');
  hotelRooms = signal('');
  hotelPrice = signal('');
  searchQuery = signal('');
  editingId = signal<number | null>(null);
  filteredHotels = signal<Hotel[]>([]);
  nextId = signal(1);

  addHotel() {
    if (!this.hotelName() || !this.hotelLocation() || !this.hotelRooms() || !this.hotelPrice()) {
      alert('Please fill all fields');
      return;
    }

    if (this.editingId() !== null) {
      const hotelList = this.hotels();
      const index = hotelList.findIndex(h => h.id === this.editingId());
      if (index !== -1) {
        hotelList[index] = {
          id: this.editingId()!,
          name: this.hotelName(),
          location: this.hotelLocation(),
          rooms: parseInt(this.hotelRooms()),
          price: parseFloat(this.hotelPrice())
        };
        this.hotels.set([...hotelList]);
        this.editingId.set(null);
      }
    } else {
      const newHotel: Hotel = {
        id: this.nextId(),
        name: this.hotelName(),
        location: this.hotelLocation(),
        rooms: parseInt(this.hotelRooms()),
        price: parseFloat(this.hotelPrice())
      };
      this.hotels.set([...this.hotels(), newHotel]);
      this.nextId.set(this.nextId() + 1);
    }

    this.clearForm();
    this.search();
  }

  deleteHotel(id: number) {
    if (confirm('Are you sure you want to delete this hotel?')) {
      const filtered = this.hotels().filter(h => h.id !== id);
      this.hotels.set(filtered);
      this.search();
    }
  }

  editHotel(hotel: Hotel) {
    this.hotelName.set(hotel.name);
    this.hotelLocation.set(hotel.location);
    this.hotelRooms.set(hotel.rooms.toString());
    this.hotelPrice.set(hotel.price.toString());
    this.editingId.set(hotel.id);
    window.scrollTo(0, 0);
  }

  clearForm() {
    this.hotelName.set('');
    this.hotelLocation.set('');
    this.hotelRooms.set('');
    this.hotelPrice.set('');
    this.editingId.set(null);
  }

  search() {
    const query = this.searchQuery().toLowerCase();
    if (!query) {
      this.filteredHotels.set(this.hotels());
    } else {
      const filtered = this.hotels().filter(h =>
        h.name.toLowerCase().includes(query) ||
        h.location.toLowerCase().includes(query)
      );
      this.filteredHotels.set(filtered);
    }
  }
}
