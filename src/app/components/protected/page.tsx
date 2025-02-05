"use client"
import { useRouter } from "next/navigation"
import  { useEffect } from 'react'

export default function ProtectedRoute ({children}:{children:React.ReactNode}) {
  const router =useRouter()

  useEffect(()=>{
      const isloggedin=localStorage.getItem("isloggedin")
      if(!isloggedin){
         router.push("/admin")
      }
  },[router]
  ) 
  
  
    return<> 
    
    {children}
   
  </>
}


