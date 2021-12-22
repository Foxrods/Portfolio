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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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