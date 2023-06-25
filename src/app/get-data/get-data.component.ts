import { Component, OnInit } from '@angular/core';
import { HttpProjService } from '../http-proj.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  name: string = '';

  constructor(private httpProjService: HttpProjService) {}

  ngOnInit(): void {}

  getName(): void {
    this.httpProjService.getName().subscribe(
      (response: any) => {
        this.name = response.name;
      },
    
    );
  }
}
