import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutPageComponent implements OnInit {
  cardItems = [
    {
      svg: '/TaskForge/src/assets/overview.svg',
      title: 'Overview',
      description: `<p class="leading-relaxed text-base text-white">
                        <strong>TaskForge</strong>! is a simple yet powerful task management system that allows users to create, read, update, and delete (CRUD) tasks with ease. Built with Angular and backed by JSON Server, this application helps you stay on top of your projects and deadlines.
                    </p>`
    },
    {
      svg: '/TaskForge/src/assets/aim.svg',
      title: 'Purpose & Goals',
      description: `<p class="leading-relaxed text-base text-white">
                        The purpose of this project was to build a functional and scalable CRUD application using Angular. <br><br>As part of a code test for a job interview, this task management system allowed me to demonstrate my skills in front-end development, API integration, and working with local databases (via JSON Server).
                    </p>`
    },
    {
      svg: '/TaskForge/src/assets/feature.svg',
      title: 'Feauteres',
      description: `<div>
                        <p class="leading-relaxed text-base text-white"> The system comes with the following key features: </p>
                        <ul class="leading-relaxed text-base text-white">
                            <li><strong>Task CRUD Operations</strong>: Create, Read, Update, and Delete tasks.</li>
                            <li><strong>User-Friendly Interface</strong>: Simple UI for easy task management.</li>
                            <li><strong>Task Status</strong>: Easily track the status of each task (e.g., Pending, In Progress, Completed).</li>
                            <li><strong>Local Storage</strong>: Data is stored using JSON Server, providing persistence across sessions.</li>
                        </ul>
                    </div>`
    },
    {
      svg: '/TaskForge/src/assets/dev.svg',
      title: 'Development & Design',
      description: `<p class="leading-relaxed text-base text-white">
                        I developed and designed this project with a focus on simplicity and functionality, ensuring a smooth and intuitive user experience for easy navigation and task management. <br> <br> This project helped me strengthen my Angular skills, especially with components, services, and routing. One key challenge was integrating Angular with JSON Server to simulate a backend API, which I overcame by deepening my understanding of Angular's HTTP methods.
                    </p>`
    },
    {
      svg: '/TaskForge/src/assets/code.svg',
      title: 'Technology Stack',
      description: `<div>
                        <p class="leading-relaxed text-base text-white">
                            The project was built using the following technologies:
                        </p>
                        <div class="flex mt-8 justify-between space-x-4">
                            <img src="/assets/angular.svg" class="w-1/4 h-auto" alt="Angular">
                            <img src="/assets/npm.svg" class="w-1/4 h-auto" alt="NPM">
                            <img src="/assets/css.svg" class="w-1/4 h-auto" alt="CSS 3">
                            <img src="/assets/tailwind.svg" class="w-1/4 h-auto" alt="Tailwind">
                        </div>
                    </div>`
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}