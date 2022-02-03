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
                        title="Raízen's customer service - CSOnline"
                        text="In this project, I developed and maintained the multiplatform system, 
                        CSOnline, Raízen's fuels and lubricants e-commerce for Brazil and 
                        Argentina, using .NET and Angular. Inside CSOnline, Shell gas stations owners can acquire their 
                        product, manage bills, locate their order via GPS tracking, open 
                        calls, etc."
                        closeModal={() => setModal(null)}>
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={adquilinha} 
                    alt={"sub-acquirer system Buspay"} 
                    onClick={() => setModal(<ProjectModal 
                        src={adquilinha} 
                        title="Caruana's sub acquirer system - BUSPAY"
                        text="In this project I developed and wrote documentations for the 
                        Brazilian bank Caruana's sub-acquirer system, Buspay, using .NET and Angular. Inside Buspay, 
                        affiliated commercial establishments can manage their bus passes 
                        sales via money, credit, or debit cards, see their commissions, and 
                        Caruana's managers can get accounting reports, make payments, 
                        manage bus companies, affiliates, and users, etc."
                        closeModal={() => setModal(null)}>
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={cemig} 
                    alt={"android apps for Cemig"} 
                    onClick={() => setModal(<ProjectModal 
                        src={cemig} 
                        title="Android native applications for CEMIG"
                        text="Using Java, I've created native Android apps for CEMIG, Electrical Company of Minas Gerais State in Brazil, where technicians can use to report details of their work, such as cost, material usage, location coordinates, etc."
                        closeModal={() => setModal(null)}>                                            
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={facerec} 
                    alt={"face recognition"} 
                    onClick={() => setModal(<ProjectModal 
                        src={facerec} 
                        title="Face recognition system using Python and OpenCV"
                        text="Using Python and OpenCV, I’ve developed a state of art face recognition algorythm, that detect and recognizes known and unknown human faces. While the known faces are monitored through surveillance cameras, those unknown faces can be registered later on. With monitored data, individual behaviors can be studied and used by retailers to better approach their customers with products that really match their likings and needs."
                        showSeeMoreButton={true}
                        closeModal={() => setModal(null)}
                        link="https://github.com/Foxrods/FaceRecognitionSystem">
                        </ProjectModal>)}>
                </ProjectIcon>
            </div>
            <div className={ styles.lines }>
                <ProjectIcon 
                    src={aug} 
                    alt={"augmented reality app"}
                    onClick={() => setModal(<ProjectModal 
                        src={aug} 
                        title="Augmented Reality application using Unity and EasyAR"
                        text="Using C#, Unity, and the EasyAR SDK, I've created a generic Augmented Reality Android application, which allows users to interact with any object previously registered in its database. Objects like image triggers and 3D models and animations can be uploaded to the app's database for others to interact with. This app was built aiming at the retail business, that wishes to innovate with its customers."
                        showSeeMoreButton={true}
                        closeModal={() => setModal(null)}
                        link="https://github.com/Foxrods/ARez">
                        </ProjectModal>)}>
                </ProjectIcon>

                <ProjectIcon 
                    src={theenv} 
                    alt={"art gallery The Environment"}
                    onClick={() => setModal(<ProjectModal 
                        src={theenv} 
                        title="The Environment"
                        text="The Environment is an artistic project that I created that was inspired by the works of Tsutomu Nihei. Throughout seventeen sci-fi/horror artworks, you will learn about a dystopic future, where mankind was replaced by robots while trying to defy an apocalypse. Before you arrive at the end, you will be meeting some of the dwellers of this strange and uncanny place."
                        showSeeMoreButton={true}
                        closeModal={() => setModal(null)}
                        link="https://the-environment.vercel.app/">
                        </ProjectModal>)}>
                </ProjectIcon>
                <ProjectIcon 
                    src={ciri} 
                    alt={"threeJS alien star system"}
                    onClick={() => setModal(<ProjectModal 
                        src={ciri} 
                        title="Star system with ThreeJS"
                        text="Using the ThreeJS library, I've created a 3D model of a fictional star system. Ciri is a red dwarf star located in the X91 quadrant at the galaxy's edge. Around it, five planets translate. One of them, Muna, is where most of the action of my future sci-fi book will take place. This project acts like trivia for those who wish to know more about Muna and its neighbors."
                        showSeeMoreButton={true}
                        closeModal={() => setModal(null)}
                        link="https://foxrods.github.io/CiriSolarSystem/">
                        </ProjectModal>)}>
                    </ProjectIcon>
                <ProjectIcon 
                    src={games} 
                    alt={"games done"}
                    onClick={() => setModal(<ProjectModal 
                        src={games} 
                        title="Games made with Unity"
                        text="While partaking in Game Jams (events where you have to create a game under a small limit of time), I've created many games using C# and Unity, that you can play and test by yourself."
                        showSeeMoreButton={true}
                        closeModal={() => setModal(null)}
                        link="https://foxrods.itch.io/">
                        </ProjectModal>)}>

                    </ProjectIcon>
            </div>
        </section>
    )
}