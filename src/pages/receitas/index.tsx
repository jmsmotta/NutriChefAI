'use client'
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import '../../app/globals.css'

const Receitas = () =>{
  const [answer, setAnswer] = useState(" ");
  const [userIngredientes, setUserIngredientes] = useState("")
 
  

    return (
        <div className={styles.page}>
        <div className={styles.bgContainer}>
        <h1 className={styles.pageTitle}>
          NutriChefAi
        </h1>
        <img src="/images/caderno-receita-bg.png" alt="" /> 
        <input value={userIngredientes} onChange={(e: any)=> setUserIngredientes(e.target.value)} placeholder="Quais ingredientes que você possui?" className={styles.receitaInput} type="text" />
        <button  className={styles.submitIngredientes}>Gerar minha receita</button>
        </div>
      </div>
    )
}

export default Receitas