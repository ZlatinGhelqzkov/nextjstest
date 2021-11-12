import styles from "../styles/introBlock.module.scss"
import CardsBlock from '../blocks/cardsBlock.js'

export default function IntroBlock() {
  return(
    <div className={styles.IntroBlock}>
      <div className={styles.introTitle}>
        <h1>Managed agency selection</h1>
        <h2>Strengthen your onboarding process</h2>
      </div>
      <div className={styles.introContent_container}>
        <CardsBlock />
      </div>
    </div>

  );
}
