import { response, Router } from "express";
import { SingIn,User_verify,teste } from "../controlers/controller";

const router = Router()



router.post("/",SingIn)


router.get("/",(req,res)=>{
    res.render("index")
})


router.get("/lobby",User_verify,teste)


export default router