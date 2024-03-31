
import styles from "./page.module.css";
import Hero from "./components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
        <div className={styles.mainWrapper}>
            <div className={styles.homeWrapper}>
                <Hero/>
            </div>
        </div>
    </>
  );
}
