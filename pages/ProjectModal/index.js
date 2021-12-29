import styles from './ProjectModal.module.css';
import Image from 'next/image'

export default function ProjectModal(props){

    function showSeeMore(){
        if(props.showSeeMoreButton)
            return (
            <div className={styles.buttonMore} onClick={()=> window.open(props.link, "_blank")}>
                See more
            </div>);
    }

    return(
        <div className={styles.outside}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.modalTitle}>
                        {props.title}
                    </div>
                    <div className={styles.modalIcon}>
                        <Image 
                            src={props.src} 
                            alt="modal icon" 
                            width={200} 
                            height={200}
                            layout='responsive'>
                        </Image>
                    </div>
                </div>
                <div className={styles.description}>
                    {props.text}
                </div>
                <div className={styles.footer}>
                    {showSeeMore()}
                    <div className={styles.buttonClose} onClick={props.closeModal}>
                        Close
                    </div>
                </div>
            </div>
        </div>);
}