import { Component, OnInit } from '@angular/core';

class Project {
  title: string;
  summary: string;
  url: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'PizzaFactory Project';
  projects: Project[] = [
    {
      title: 'PizzaFactory/Camino',
      summary: 'Cloud IDE PaaS for your customized Eclipse/Che workspaces.',
      url: 'https://camino.pizzafactory.jp/',
      tags: [ 'Released', 'Open Alpha Preview' ]
      
    },
    {
      title: 'PizzaFactory/Contorno',
      summary: '"Side dish" collection for Eclipse/Che7 based environments.',
      url: 'https://contorno.pizzafactory.jp/',
      tags: [ 'Released', 'Working' ]
    },
    {
      title: 'PizzaFactory/Cassa',
      summary: 'Payment processor SaaS based on BTCPayServer.',
      url: 'https://btcpay.c.pizzafactory.jp/',
      tags: [ 'Released', 'Open Alpha Preview' ]
    },
  ];

}
