import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../shared/services/firestore.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'new-obra',
  templateUrl: './new-obra.component.html',
  styleUrls: ['./new-obra.component.css']
})
export class NewObraComponent implements OnInit {

  obraForm: FormGroup;
  /* avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"; */

  validation_messages = {
    'nome': [{ type: 'required', message: 'Nome é obrigatório.' }],
    'matricula': [{ type: 'required', message: 'Matrícula é obrigatória.' }],
    'metragem': [{ type: 'required', message: 'Metragem é obrigatória.' }]
  };

  constructor(
    private fb: FormBuilder,
    // public dialog: MatDialog,
    private router: Router,
    public firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.obraForm = this.fb.group({
      userUID: [ JSON.parse(localStorage.getItem('user')).uid ],
      nome: ['', Validators.required ],
      matricula: ['', Validators.required ],
      metragem: ['', Validators.required ],
      tipoObra: [''],
      alvaraConstrucao: [''],
      art: [''],
      registroImovel: [''],
    });
  }

  resetFields(){
    /* this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"; */
    this.obraForm = this.fb.group({
      nome: new FormControl('', Validators.required),
      matricula: new FormControl('', Validators.required),
      metragem: new FormControl('', Validators.required),
      tipoObra: new FormControl(''),
      alvaraConstrucao: new FormControl(''),
      art: new FormControl(''),
      registroImovel: new FormControl(''),
    });
  }

  onSubmit(value){
    this.firestoreService.createObra(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }

  /* openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  } */
}
