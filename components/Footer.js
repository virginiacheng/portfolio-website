import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        @ 2023 Virginia Cheng

        <div>
          <a href="https://www.linkedin.com/in/virginia-cheng/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.logo} />
          </a>
          <a href="https://github.com/virginiacheng" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.logo} />
          </a>
        </div>
      </footer>
    </>
  )
}
