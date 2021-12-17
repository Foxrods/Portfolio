import styles from './ProjectModal.module.css';
import Image from 'next/image'

export default function ProjectModal(props){
    if(props.src != null && props.src != undefined)
        return(
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.modalIcon}>
                        <Image src={props.src} alt="modal icon" width={120} height={120}/>
                    </span>
                    <span>
                        {props.title}
                    </span>
                </div>
            </div>
        );
}