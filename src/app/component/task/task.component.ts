import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../../service/task.service';
import { Task } from '../../model/task.model';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(
    private taskService: TaskService, 
    private router: Router, 
    private dialog: MatDialog, 
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadTasks();
    this.loadTotalItems();
  }

  openAddModal(): void {
    this.location.go('/task/add-task');
    const dialogRef = this.dialog.open(AddModalComponent, {
      data: {},
      panelClass: 'dark-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.go('/task');
      this.loadTasks(); 
    });
  }

  openEditModal(task: Task): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      data: { task },
      panelClass: 'dark-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.go('/task');
      this.loadTasks();
    });
  }

  loadTasks(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks.slice(startIndex, endIndex);
    });
  }

  loadTotalItems(): void {
    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe(
      count => {
        this.totalItems = count.length;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      },
      error => {
        console.error('Failed to fetch total items:', error);
      }
    );
  }

  editTask(task: Task): void {
    this.router.navigate(['/tasks', task.id, 'edit']);
  }

  deleteTask(taskId: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  getStatusStyle(status: string) {
    switch (status) {
      case 'To do':
        return { 'background-color': '#5555552a', 'color': '#bfbcbc' };
      case 'Done':
        return { 'background-color': '#00800039', 'color': '#24ab5d' };
      case 'In progress':
        return { 'background-color': '#0000ff39', 'color': '#6097f5' };
      default:
        return {};
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadTasks();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadTasks();
    }
  }
}
