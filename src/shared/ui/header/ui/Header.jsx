import styles from './Header.module.scss'
import clsx from "clsx";
import {SettingsDrawer} from "@/widgets/SettingsDrawer/ui";

export const Header = () => {

  return (
    <header className={styles.header}>
      <h1 className={clsx(styles.title)}>hello</h1>
      <SettingsDrawer />
    </header>
  )
}