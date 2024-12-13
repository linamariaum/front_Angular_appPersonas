import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Persona } from '../../models/persona';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  listaPersonas: Persona[] = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.obtenerPersonas();    
  }

  obtenerPersonas(): void {
    this.personasService.consultar().subscribe({
      next: (personas: Persona[]) => {
        this.listaPersonas = personas;
      },
      error: () => {
        this.listaPersonas = [];
      }
    });
  }
}
