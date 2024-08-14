import Image from "next/image";
import styles from './HeroImage.module.css';
const HeroImage = () => {
    return (
        <Image
        src="/hero-desktop.png"
        alt="Cozy living room with a fireplace"
        className={styles.heroImage}
        height="500"
        width="500"


      />
    )
}

export default HeroImage