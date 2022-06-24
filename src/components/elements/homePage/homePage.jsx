import Image from 'next/image'
import styles from './homePage.module.scss'
export default function homePage() {
  return (
    <>
    <svg className={styles.svg}>
        <clipPath id="my_clip_path" clipPathUnits="objectBoundingBox"><path d="M0,0.53,0.361,0 h0.639 v1 H0.361 L0,0.53"></path></clipPath>
    </svg>
    <div className={styles.home}>

        <div className={styles.maintext}>
            
          <p>
            
            <span>
              <img src="/icons/logo_green.svg" alt="" />
              ssources 
              <br />
              relationnelles 
              <br />
            </span>
            Bienvenue sur la plateforme qui enrichi vos relations, en proposant une mise à disposition de ressources, pour vous et pour les autres !
          </p>
        </div>


        <div className={styles.clipped}>
          {/* <Image className={styles.image} src="/images/HEADER_canvas.svg"
            alt="Picture of somehting" width={1000}
            height={1000}/>  */}
          <img className={styles.image} src="/images/HEADER_canvas.svg" alt="" /> 
        </div>
        
    </div>
    </>

  )
}
