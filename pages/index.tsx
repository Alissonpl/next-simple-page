import styles from "./Home.module.css";
//import logo from "../assets/images/logo.png";
export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <a>filmes</a>
        <div className={styles.containerButton}>
          <button className={styles.buttonAssine}>Assine a Netflix</button>
          <button className={styles.buttonEntrar} name="Entrar">
            Entrar
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <h1>Originais</h1>
        <a>
          Netflix você acha conteúdo original incrível, que não pode ser
          encontrado em nenhum outro lugar. Filmes, séries, especiais... Todos
          feitos especialmente para você!
        </a>

        <h3>Mais Populares</h3>
        <div className={styles.cardsfilmes}>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
        </div>
        <h3>Programas para toda a familia</h3>
        <div className={styles.cardsfilmes}>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
        </div>
        <h3>Embarques de ação</h3>
        <div className={styles.cardsfilmes}>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
        </div>
        <h3>Series Estrangeiras</h3>
        <div className={styles.cardsfilmes}>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
          <div className={styles.cardfilme}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <h1>Tem muito mais esperando por você.</h1>
        <h2>
          A Netflix tem um grande catálogo de filmes, documentários, séries,
          originais Netflix premiados e muito mais. Assista o quanto quiser,
          quando quiser.
        </h2>
        <button className={styles.buttonAssineBig}>Assine a Netflix</button>
        <div className={styles.infoFooterContainer}>
          <h4>Dúvidas? Entre em contato.</h4>
          <div className={styles.infoFooter}>
            <div>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
            </div>
            <div>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
              <a className={styles.linkFooter}>Avisos legais</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
