"use client";

import { useState } from "react";

import styles from "./page.module.css";

export default function Home() {

  const [nome] = useState("Clara");

  const [email] = useState("clara@email.com");

  const [password] = useState("mySuperSecretPassword");

  const itens = ["Cabbage", "Garlic", "Apple"];

  function handleClick() {

    alert("Você clicou no botão!");

  }

  return (
<main className={styles.container}>
<h1>Bem vindo ao meu app, {nome}!</h1>
<hr />
<ul>

        {itens.map((item) => (
<li

            key={item}

            className={item === "Apple" ? styles.destaque : styles.item}
>

            {item}
</li>

        ))}
</ul>
<hr />
<p>

        Nome = {nome} - E-mail: {email} - password: {password}
</p>
<hr />
<button className={styles.botao} onClick={handleClick}>

        I&apos;m a button
</button>
<hr />
<p className={styles.negrito}>e-mail: {email}</p>
<hr />
<p className={styles.negrito}>e-mail: {email}</p>
</main>

  );

}