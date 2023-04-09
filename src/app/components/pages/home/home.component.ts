import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';
import { IMoment } from 'src/app/@types/Moments';
import { enviroment } from 'src/enviroments/enviroment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  allMoments: IMoment[] = [];
  moments: IMoment[] = [];
  baseApiUrl = enviroment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        return (item.createdAt = new Date(item.createdAt!).toLocaleDateString(
          'pt-BR'
        ));
      });

      this.allMoments = data;
      this.moments = data;
      console.log(this.moments);
      
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) =>
      moment.title.toLowerCase().includes(value)
    );
  }
}
