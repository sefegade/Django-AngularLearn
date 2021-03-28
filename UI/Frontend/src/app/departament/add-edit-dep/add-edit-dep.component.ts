import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input()
  dep:any;
  DepartamentId: string = "";
  DepartamentName: string = "";

  ngOnInit(): void {
    this.DepartamentId = this.dep.DepartamentId;
    this.DepartamentName = this.dep.DepartamentName;
  }

  addDepartament(){
    var val = {DepartamentId:this.DepartamentId, DepartamentName:this.DepartamentName};
    this.service.addDepartament(val).subscribe(res=>{alert(res.toString())});
  }
  updateDepartament(){
    var val = {DepartamentId:this.DepartamentId, DepartamentName:this.DepartamentName};
    this.service.updateDepartament(val).subscribe(res=>{alert(res.toString())});
  }
}
