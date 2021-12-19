import styles from './ProjectModal.module.css';
import Image from 'next/image'

export default function ProjectModal(props){
    return(
        <div className={styles.outside}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.modalTitle}>
                        {props.title}
                    </div>
                    <span className={styles.modalIcon}>
                        <Image 
                            src={props.src} 
                            alt="modal icon" 
                            width={160} 
                            height={160}>
                        </Image>
                    </span>
                </div>
                <div className={styles.description}>

                </div>
            </div>
        </div>);
}