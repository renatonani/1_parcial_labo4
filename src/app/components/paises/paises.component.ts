import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit
{
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';
  selectedCountry: any = null; 
  listWidth: number = 0; 

  @Output() country = new EventEmitter<any>();

  constructor(private paises: PaisesService) { }

  ngOnInit() {
    this.paises.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.filteredCountries = data;
      this.listWidth = data.length * 320;
    });
  }

  filterCountries() {
    if (!this.searchTerm) {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  

  selectCountry(country: any) {
    if (this.selectedCountry === country) {
      this.selectedCountry = null;
    } else {
      this.selectedCountry = country;
    }
    this.OnSelectCountry();
  }

  public OnSelectCountry()
  {
    this.country.emit(this.selectedCountry);
  }
}