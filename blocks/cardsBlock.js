import styles from "../styles/cardsBlock.module.scss"
import Image from "next/image"
import video from "../assets/video.png"

import { BsPen } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";


export default function CardsBlock() {
  return(
    <div className={styles.Container}>
      <div className={styles.Content_image}>
        <Image src={video} height="600px" width="400px" />
      </div>
      <div className={styles.CardsBlock}>

        <div className={styles.Card_brief}>
          <BsPen size="40px" />
          <div className={styles.Card_inner}>
            <div className={styles.Card_title}>
              <h3>Brief</h3>
            </div>
            <p>Complete <strong>brief writing or simple guiadance</strong> on what to include, we've got you covered.</p>
          </div>
        </div>

        <div className={styles.Card_search}>
          <RiUserSearchLine size="40px" />
          <div className={styles.Card_inner}>
            <div className={styles.Card_title}>
              <h3>Search</h3>
            </div>
            <p>In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.</p>
          </div>
        </div>

        <div className={styles.Card_pitch}>
          <FaChalkboardTeacher size="40px" />
          <div className={styles.Card_inner}>
            <div className={styles.Card_title}>
              <h3>Pitch</h3>
            </div>
            <p>Comperhemsive <strong>pitch management</strong>, including comms, diary management and pitch hosting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
