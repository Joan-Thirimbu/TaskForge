import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 
import { Observable } from 'rxjs';
import { Task } from '../../model/task.model'; 

interface Status {
  status: string;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  status: Status[] = [
    {status: 'To do'},
    {status: 'In progress'},
    {status: 'Done'},
  ];

  task!: Task;

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    private http: HttpClient,
    private location: Location,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data.task) {
        this.task = this.data.task;
        this.location.go(`/task/edit-task/${this.data.task.id}`);
    } else {
        console.error('No task data provided');
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const formData = {
        title: form.value.title,
        status: form.value.status,
        description: form.value.description
      };
      this.updateTask(this.data.task.id, formData).subscribe(
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
  
  private updateTask(taskId: number, formData: any): Observable<any> {
    const url = `http://localhost:3000/tasks/${taskId}`;
    return this.http.put<Task>(url, formData); 
  }
  
}
