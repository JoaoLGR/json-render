import styles from './page.module.css'
import { obj } from '@/utils/obj'
import { RecursiveComponent } from '@/components/RecursiveComponent'

export default function Home() {
  return (
    <main className={styles.main}>
      <RecursiveComponent componentData={obj} />
    </main>
  )
}
