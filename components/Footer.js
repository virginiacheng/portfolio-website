import styles from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faGithub } from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        @ 2023 Virginia Cheng

        <div>
          <FontAwesomeIcon icon={faFacebookF} className={styles.logo} />
          <FontAwesomeIcon icon={faGithub} className={styles.logo} />
        </div>
      </footer>
    </>
  )
}
