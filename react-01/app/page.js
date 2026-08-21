"use client";

import { useState } from "react";
import styles from "./page.module.css";

const products = [
  { name: "Jaqueta Marcela", category: "Nylon", price: "R$ 389,90", tone: "Areia", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&auto=format&fit=crop" },
  { name: "Tricot Nina", category: "Malhas", price: "R$ 119,90", tone: "verde musgo", image: "https://img.lojasrenner.com.br/item/930128588/original/3.jpg" },
  { name: "Camisa Clara", category: "Essenciais", price: "R$ 79,90", tone: "marrom", image: "https://img.lojasrenner.com.br/item/931281437/original/13.jpg" },
  { name: "Calça reta", category: "Jeans", price: "R$ 269,90", tone: "Chumbo", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzpkBDwUmkzsDIsWkzAM19TEJY7tINbJ_eWLnLXoRTziMrI39RH6vVaFBD8wxchVQzUwoP2U9nfIyoO_NibMrNYx8l9WpUHFIkRfP6VU4WIk_pOk8UqP4mLw" },
  { name: "Sandália Lia", category: "Calçados", price: "R$ 189,90", tone: "marrom", image: "https://img.lojasrenner.com.br/item/931203914/original/3.jpg" },
];

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const categories = ["Tudo", "Novidades", "Nylon", "Essenciais", "Malhas", "Jeans", "Calçados"];
  const visibleProducts = activeCategory === "Tudo" || activeCategory === "Novidades"
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>CLARY<span>/</span>STUDIO</div>
        <button className={styles.menuButton} aria-label="Abrir menu">☰</button>
        <nav className={styles.nav} aria-label="Navegação principal">
          <p className={styles.navLabel}>Explorar</p>
          {categories.map((category) => (
            <button className={activeCategory === category ? styles.navItemActive : styles.navItem} key={category} onClick={() => setActiveCategory(category)}>
              <span>{category}</span><span className={styles.arrow}>↗</span>
            </button>
          ))}
        </nav>
        <div className={styles.sidebarBottom}><a href="#sobre">Sobre o estúdio</a><a href="#atendimento">Atendimento</a><span className={styles.copyright}>© 2024 CLARY/STUDIO</span></div>
      </aside>
      <main className={styles.main}>
        <header className={styles.header}><div className={styles.breadcrumb}>Início <span>/</span> Coleção 01</div><div className={styles.headerActions}><button className={styles.iconButton} aria-label="Pesquisar">⌕</button><button className={styles.loginTab} onClick={() => setLoginOpen(true)}>Entrar <span>↗</span></button><button className={styles.bagButton} aria-label="Sacola">Sacola <span>0</span></button></div></header>
        <section className={styles.hero}><div><p className={styles.eyebrow}>Coleção 01 / 24</p><h1>Vista o seu<br /><em>agora.</em></h1></div><div className={styles.heroNote}><p>Peças essenciais, matérias honestas e design que acompanha a vida real.</p><a href="#produtos">Ver coleção <span>↓</span></a></div></section>
        <section className={styles.collection} id="produtos"><div className={styles.sectionHeading}><div><span className={styles.sectionNumber}>01</span><h2>Peças em destaque</h2></div><span>{visibleProducts.length} resultados</span></div><div className={styles.productGrid}>{visibleProducts.map((product, index) => (<article className={styles.product} key={product.name}><div className={styles.productImage}><img src={product.image} alt={product.name} /><button className={styles.favorite} aria-label={`Favoritar ${product.name}`}>♡</button>{index === 0 && <span className={styles.newLabel}>Novo</span>}</div><div className={styles.productInfo}><div><h3>{product.name}</h3><p>{product.tone}</p></div><strong>{product.price}</strong></div></article>))}</div></section>
      </main>
      {loginOpen && <div className={styles.modalBackdrop} onClick={() => setLoginOpen(false)}><section className={styles.loginPanel} onClick={(event) => event.stopPropagation()} aria-label="Área de login"><button className={styles.closeButton} onClick={() => setLoginOpen(false)} aria-label="Fechar login">×</button><p className={styles.eyebrow}>Área reservada</p><h2>Bem-vinda<br /><em>de volta.</em></h2><form className={styles.loginForm}><label>E-mail<input type="email" placeholder="voce@email.com" required /></label><label>Senha<input type="password" placeholder="••••••••" required /></label><button type="submit" className={styles.submitButton}>Entrar <span>↗</span></button></form><a className={styles.recovery} href="#recuperar">Esqueci minha senha</a></section></div>}
    </div>
  );
}
