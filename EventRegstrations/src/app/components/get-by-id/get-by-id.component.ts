import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/CreateUser';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit {

  myId!: number;
  user!: CreateUser;

  constructor(private http: CrudService){}
  ngOnInit(): void {
    this.getById(this.myId);
  }
    getById(id: number){

      this.http.getById(id).subscribe({
        next: (data) => {
          this.user = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      })
    }


}
