import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from './service/provincia.service';
import { Provincia } from './model/provincia';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demosssss';
  provincias: Provincia[] = []
  provincia: Provincia = new Provincia;

  constructor(private provinciaService: ProvinciaService) {
    }

  ngOnInit() {
    console.log('ngOnInit');
    this.cargarProvincias();
  }



  cargarProvincias(){
    this.provinciaService.getProvincias()
    .subscribe(response => {
      console.log(response);
      this.provincias = response as Provincia[];
      console.log(this.provincias);
    });
  }


  crear(provincia: Provincia){
    
    console.log(this.provincia);
    // this.provinciaService.create(this.provincia)
    // .subscribe(response => {
    //   console.log(response);
    // });
  }

  eliminar(provincia: Provincia){
    console.log(provincia);
    this.provinciaService.delete(provincia.id)
    .subscribe(response => {
      console.log(response);
    });  }

}
