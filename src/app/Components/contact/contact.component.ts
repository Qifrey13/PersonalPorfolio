import { Component, OnInit, OnDestroy } from '@angular/core';

interface Task {
  id: number;
  title: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit() {
    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      // Load tasks from local storage or sessionStorage when the component initializes
      const storedTasks = localStorage.getItem('tasks') || sessionStorage.getItem('tasks');
      if (storedTasks) {
        this.tasks = JSON.parse(storedTasks) as Task[];
      }
    }
  }

  ngOnDestroy() {
    // Check if sessionStorage is available
    if (typeof sessionStorage !== 'undefined') {
      // Save tasks to sessionStorage when the component is destroyed
      sessionStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  newtask(content: string) {
    if (content.trim() !== '') {
      const newTask: Task = { id: this.tasks.length, title: content, isEditing: false };
      this.tasks.push(newTask);
      // Save tasks to localStorage after adding a new task
      this.updateLocalStorage();
    }
  }

  removetask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    // Save tasks to localStorage after removing a task
    this.updateLocalStorage();
  }

  removealltasks() {
    this.tasks = [];
    // Clear localStorage when all tasks are removed
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('tasks');
    }
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  updateTask(task: Task) {
    task.isEditing = false;
    // Save tasks to localStorage after updating a task
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
}
