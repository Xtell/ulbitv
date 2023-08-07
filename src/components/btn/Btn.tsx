import styles from "./Btn.module.pcss"

export const Btn = () => {
  console.debug(styles)
  return (
    <button className={ `${ styles.Btn } ${ styles["Btn--red"] }` }>
      <span className={ styles.Btn__label }>Button</span>
    </button>
  )
}