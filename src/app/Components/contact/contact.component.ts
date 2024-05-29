import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // <- Corrected property name
})
export class ContactComponent {
  tasks: any = [];

  newtask(content: string) {
    if (content !== '') {
      this.tasks.push({ id: this.tasks.length, title: content, isEditing: false });
    }
  }

  removetask(id: number) {
    this.tasks = this.tasks.filter((item: { id: number }) => item.id !== id);
  }

  removealltasks() {
    this.tasks = [];
  }

  editTask(task: any) {
    task.isEditing = true;
  }

  updateTask(task: any) {
    task.isEditing = false;
  }
}
