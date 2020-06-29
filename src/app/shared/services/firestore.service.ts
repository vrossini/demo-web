import { Injectable } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public db: AngularFirestore) {}

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  getObra(obraKey){
    return this.db.collection('obras').doc(obraKey).snapshotChanges();
  }

  getObras(userUID){
    return from(this.db.collection('obras').ref.where('userUID', '==', userUID).get());
  }

  createObra(value){
    return this.db.collection('obras').add({
      userUID: value.userUID,
      nome: value.nome,
      nameToSearch: value.nome.toLowerCase(),
      matricula: value.matricula,
      metragem: parseInt(value.metragem),
      tipoObra: value.tipoObra,
      alvaraConstrucao: value.alvaraConstrucao,
      art: value.art,
      registroImovel: value.registroImovel
    });
  }

  searchObras(searchValue){
    return this.db.collection('obras',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  updateObra(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('obras').doc(userKey).set(value);
  }

  /* getAvatars(){
    return this.db.collection('/avatar').valueChanges()
  } */

  /* deleteObra(userKey){
    return this.db.collection('obras').doc(userKey).delete();
  } */

  /* searchUsersByAge(value){
    return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  } */
}
