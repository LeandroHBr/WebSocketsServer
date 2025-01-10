import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {getDoc,doc} from "firebase/firestore"
import {auth, db} from "../../db/db";


import { Request,Response,NextFunction } from "express";
const SingIn = (req:Request,res:Response) =>{
    let email:string = req.body.email
    let password : string = req.body.password

    signInWithEmailAndPassword(auth,email,password).then(data =>{
        return res.redirect("/lobby")
    }).catch(e => {
        return res.send("acesso negado")
    })
}

const User_verify = (req:Request,res:Response,next:NextFunction)=>{
    onAuthStateChanged(auth,(user)=>{
        if(user){
            next()
        }else{
            res.send("teste")
        }
    })
}

const teste = async (req:Request,res:Response) =>{
    if(auth.currentUser){
    const docRef = doc(db, "reservatórios",auth.currentUser.uid);    
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.render("lobby",{data:docSnap.data()})
      } else{
        res.send("errou");
      }

    }
}

export {SingIn,User_verify,teste}