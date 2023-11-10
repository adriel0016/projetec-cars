import LogoBmw from "../../assets/logo/logo-bmw-rio.svg";
import Telefone from "../../assets/icons/telefone.svg";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.headerContent}>
        <div className={styles.headerContato}>
          <img src={Telefone} />
          <p>(21) 2042-4442</p>
        </div>
        <img src={LogoBmw} alt="logo da bmw" />
      </section>
      <button className={styles.buttonContacao}>Solicite uma cotação</button>
    </header>
  );
}