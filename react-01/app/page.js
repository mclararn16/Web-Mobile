import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Fofocas • Lifestyle • computação</p>
          <h1>
            Clary&apos;s <span>App</span>
          </h1>
          <p className={styles.description}>
            Um site para entreter, informar e inspirar.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#descubra">
              Descubra mais
            </a>
            <a className={styles.secondary} href="#contato">
              Fale com  Clary
            </a>
          </div>

          <ul className={styles.highlights}>
            <li>Documentação</li>
            <li>Novidades</li>
            <li>Posts</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
