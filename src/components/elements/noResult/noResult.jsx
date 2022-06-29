import Image from "next/image"
import styles from "./noResult.module.scss"
export default function noResult() {
  return (
    <div className={styles.go}>
        <Image         
          src={"/images/go.gif"}
          alt={"Picture of GO"}
          width={150}
          height={150}
        /> 
        <br />
        <h3>Aucun résultat</h3>
    </div>
  )
}
