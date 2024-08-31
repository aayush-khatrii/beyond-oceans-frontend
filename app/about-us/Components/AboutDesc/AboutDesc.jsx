import styles from './AboutDesc.module.css'

export default function AboutDesc() {
  return (
    <div className={styles.mainWrapper}>
        <div className={styles.subWrapper}>
            <div className={styles.dataLists}>
                <div className={styles.dataListRow}>
                    <div className={styles.dataListTitle}>
                        <span>Who We Are</span>
                    </div>
                    <div className={styles.dataListDesc}>
                        <p>We're a passionate bunch of island folks, storytellers at heart, and travel experts by experience. We know every hidden gem, every off-the-beaten-path adventure, and every beach that begs for a quiet stroll. We're not just showing you the Andamans and Nicobar Islands; we're inviting you to experience them the way we do.</p>
                    </div>
                </div>
                <div className={styles.sepratorLine}></div>
                <div className={styles.dataListRow}>
                    <div className={styles.dataListTitle}>
                        <span>What We Do</span>
                    </div>
                    <div className={styles.dataListDesc}>
                        <p>We don't just plan trips, we craft memories. We curate itineraries that are as unique as you are, whether you crave an adrenaline-pumping adventure or a soul-soothing escape. From diving expeditions to jungle explorations, from luxurious stays to rustic beach shacks, we've got something for everyone.</p>
                    </div>
                </div>
                <div className={styles.sepratorLine}></div>
                <div className={styles.dataListRow}>
                    <div className={styles.dataListTitle}>
                        <span>Our Mission</span>
                    </div>
                    <div className={styles.dataListDesc}>
                        <p>Our mission is simple: share the awesomeness of the Andamans with travelers from all over India. But we also care deeply about protecting this island paradise. That's why we promote responsible tourism –  exploring the islands in a way that respects the environment and supports our local communities.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
