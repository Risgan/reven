import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from 'src/app/entities/user';
import { GoogleAuthProvider, updateProfile, getAuth} from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  async createUser(email: string, password: string){
    await this.af.createUserWithEmailAndPassword(email,password);
  }

  async login(email: string, password: string){
    try {
      // const { user } = await this.af.signInWithEmailAndPassword(email, password);
      // return user;
      let { user } = await this.af.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      return user;

    } catch (error) {
      console.log(error);
    }
  }

  async loginGoogle(): Promise<User>{
    const { user } = await this.af.signInWithPopup(new GoogleAuthProvider())
    return user;
  }

  async logout(): Promise<void>{
    try {
      await this.af.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  resetPassword(email: string){
    this.af.sendPasswordResetEmail(email);
  }

  async updateUserData(user: User){
    const userRef : AngularFirestoreDocument<User> = this.firestore.doc(`users/${user.uid}`);
    
    let data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    }

    return userRef.set(data,{merge:true})
  }

  getPruebas(): Observable<any>{
    return this.firestore.collection('pruebas').snapshotChanges();
  }

  async addPruebas(): Promise<any>{

    return this.firestore.collection('pruebas').add({
      id: 2,
      name: "Esta bien"
    })

    // let a = await this.firestore.collection('pruebas').add({
    //   id: 2,
    //   name: "Esta bien"
    // });

    // console.log(a)
    // return a
  }

}
