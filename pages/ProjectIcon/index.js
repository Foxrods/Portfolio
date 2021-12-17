import styles from './ProjectIcon.module.css'
import Image from 'next/image'

export default function ProjectIcon(props){
    return (
        <div className={styles.container} onClick={props.onClick}>
            <Image
                src={props.src}
                alt={props.alt}
                height={300}
                width={300}
                layout='responsive'
            >
            </Image>
        </div>
    )
}