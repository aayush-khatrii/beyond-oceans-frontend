import styles from './ListItem.module.css'

export default function ListItem({ children }) {
  return (
    <li className={styles.containerItem}>
        {children}
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M1.625 1.28125L5.84375 5.5L1.625 9.71875" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </li>
  )
}
