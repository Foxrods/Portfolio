import styles from './Projects.module.css';
import ProjectIcon from '../ProjectIcon';
import facerec from '../../public/facerec.svg';
import aug from '../../public/aug.svg';
import cemig from '../../public/cemig.svg';
import adquilinha from '../../public/adquilinha.svg';
import raizen from '../../public/raizen.svg';
import ciri from '../../public/ciri.svg';
import theenv from '../../public/theenv.svg';
import games from '../../public/games.svg';
import { useState } from 'react';
import ProjectModal from '../ProjectModal';

export default function Projects(){
    let [modalProps, setModalProps] = useState(null);

    function setProps(){
        console.log("clicado");
    }
    function exhibitModal(){
        if(modalProps != null){
            console.log(modalProps.src)
            return <ProjectModal src={modalProps.src} title={modalProps.title}></ProjectModal>
        }
    }
    return (
        <section className={ styles.main }>
            <div className={styles.title}>
                PROJECTS
            </div>
            {exhibitModal()}
            <div className={ styles.lines }>
                <ProjectIcon src={raizen} alt={"e-commerce CSOnline"} onClick={() => setModalProps({src: {raizen}, title: "Raízen's customer service - CSOnline"})}></ProjectIcon>
                <ProjectIcon src={adquilinha} alt={"sub-acquirer system Buspay"} onClick={() => setModalProps({src: {adquilinha}, title: "Caruana's sub acquirer system - BUSPAY"})}></ProjectIcon>
                <ProjectIcon src={cemig} alt={"android apps for Cemig"} onClick={() => setModalProps({src: {cemig}, title: "Android native applications for CEMIG"})}></ProjectIcon>
                <ProjectIcon src={facerec} alt={"face recognition"} onClick={() => setModalProps({src: {facerec}, title: "Face recognition system using Python and OpenCV"})}></ProjectIcon>
            </div>
            <div className={ styles.lines }>
                <ProjectIcon src={aug} alt={"augmented reality app"}></ProjectIcon>
                <ProjectIcon src={theenv} alt={"art gallery The Environment"}></ProjectIcon>
                <ProjectIcon src={ciri} alt={"threeJS alien solar system"}></ProjectIcon>
                <ProjectIcon src={games} alt={"games done"}></ProjectIcon>
            </div>
        </section>
    )
}