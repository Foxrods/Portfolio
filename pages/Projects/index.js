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
    let [modal, setModal] = useState(null);

    function exhibitModal(){
        if(modal){
            return modal;
        }
    }
    return (
        <section className={ styles.main }>
            <div className={styles.title}>
                WORKS AND PROJECTS
            </div>
            {exhibitModal()}
            <div className={ styles.lines }>
                <ProjectIcon 
                    src={raizen} 
                    alt={"e-commerce CSOnline"} 
                    onClick={() => setModal(<ProjectModal 
                        src={raizen} 
                        title="Raízen's customer service - CSOnline">
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={adquilinha} 
                    alt={"sub-acquirer system Buspay"} 
                    onClick={() => setModal(<ProjectModal 
                        src={adquilinha} 
                        title="Caruana's sub acquirer system - BUSPAY">
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={cemig} 
                    alt={"android apps for Cemig"} 
                    onClick={() => setModal(<ProjectModal 
                        src={cemig} 
                        title="Android native applications for CEMIG">                                            
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={facerec} 
                    alt={"face recognition"} 
                    onClick={() => setModal(<ProjectModal 
                        src={facerec} 
                        title="Face recognition system using Python and OpenCV">
                        </ProjectModal>)}>
                </ProjectIcon>
            </div>
            <div className={ styles.lines }>
                <ProjectIcon 
                    src={aug} 
                    alt={"augmented reality app"}
                    onClick={() => setModal(<ProjectModal 
                        src={aug} 
                        title="Augmented Reality appication using Unity and EasyAR">
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={theenv} 
                    alt={"art gallery The Environment"}
                    onClick={() => setModal(<ProjectModal 
                        src={theenv} 
                        title="The Environment">
                        </ProjectModal>)}>
                </ProjectIcon>
                <ProjectIcon 
                    src={ciri} 
                    alt={"threeJS alien star system"}
                    onClick={() => setModal(<ProjectModal 
                        src={ciri} 
                        title="Star system with ThreeJS">
                        </ProjectModal>)}>
                    </ProjectIcon>
                <ProjectIcon 
                    src={games} 
                    alt={"games done"}
                    onClick={() => setModal(<ProjectModal 
                        src={games} 
                        title="Game Jam games">
                        </ProjectModal>)}>

                    </ProjectIcon>
            </div>
        </section>
    )
}