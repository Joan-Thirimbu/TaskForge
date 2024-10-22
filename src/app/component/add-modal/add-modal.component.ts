import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

interface Status {
  status: string;
}

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})

export class AddModalComponent {

  constructor(
    public dialogRef: MatDialogRef<AddModalComponent>,
    private http: HttpClient,
    private location: Location,
  ) {}

  status: Status[] = [
    {status: 'To do'},
    {status: 'In progress'},
    {status: 'Done'},
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = {
        title: form.value.title,
        status: form.value.status.status,
        description: form.value.description
      };
      console.log('Form Data:', formData);
      this.saveTask(formData).subscribe(
        () => {
          this.location.go('/task');
          window.location.reload();
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error saving task:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  private saveTask(formData: any): Observable<any> {
    return this.http.post(environment.apiUrl, formData);
  }

}