import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string){

    switch(code){
      // el correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      // contraseña debil
      case FirebaseCodeErrorEnum.weakPassword:
        return 'La contraseña es muy debil';
      // correo invalido
      case FirebaseCodeErrorEnum.invalidEmail:
        return 'correo invalido';
      // Contraseña incorrecta
      case  FirebaseCodeErrorEnum.wrongPassword:
        return 'Contraseña incorrecta';
      // Elusuario no existe
      case FirebaseCodeErrorEnum.userNotFound:
        return 'El usuario no existe';
      default:
        return 'Error desconocido'
    }
  }
}
