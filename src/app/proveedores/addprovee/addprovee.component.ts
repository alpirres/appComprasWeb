import { Component, OnInit, ViewChild } from '@angular/core'; 
import { FormControl, FormGroup, FormBuilder, Validators } from'@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  @ViewChild('proveedorForm', {static:true}) proveedorForm: FormGroup; 
  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona', 'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba', 'La Coruña','Cuenca','Gerona','Granada','Guadalajara', 'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo', 'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora','Zaragoza' ];
  proveedor: any; 
  constructor(private pf: FormBuilder, private proveedorService: ProveedoresService) { 
    this.proveedor = {       
      nombre: '',       
      cif: '',       
      direccion: '',       
      cp: '',       
      localidad: '',       
      provincia: '',       
      telefono: null,       
      email: '', 
      contacto: '' 
    }

  }

  onSubmit(){
    this.proveedor = this.savePresupuesto();
    this.proveedorService.postProveedor( this.proveedor )
    .subscribe(newpres => {

    });
    this.proveedorForm.reset();
  } 

  ngOnInit() {
    this.proveedorForm = this.pf.group({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', [Validators.required, Validators.minLength(10)]],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      contacto: ['', Validators.required],
    });
  }

  savePresupuesto() {
    const savePresupuesto = {
      nombre: this.proveedorForm.get('nombre').value,
      cif: this.proveedorForm.get('cif').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      localidad: this.proveedorForm.get('localidad').value,
      provincia: this.proveedorForm.get('provincia').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
      contacto: this.proveedorForm.get('contacto').value
    };
    return savePresupuesto;
  }


}
