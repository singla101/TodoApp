import styles from "../css-modules/Header.module.css";
function Header({ value }) {
  return <h1 className={styles.appHeader}>{value}</h1>;
}

export default Header;
