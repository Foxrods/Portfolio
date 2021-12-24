import styles from './Tech.module.css';
import csharp from '../../public/csharp.svg'
import Image from 'next/image'
import javascript from '../../public/javascript.svg'
import typescript from '../../public/typescript.svg'
import python from '../../public/python.svg'
import java from '../../public/java-1.svg'
import angular from '../../public/angular.svg'
import react from '../../public/react.svg'
import next from '../../public/next.svg'
import net from '../../public/net.svg'
import node from '../../public/node.svg'
import unity from '../../public/unity.svg'
import android from '../../public/android.svg'

export default function Tech(){
    return(
        <section className={styles.main}>
            <div className={styles.title}>
                PROGRAMMING LANGUAGES
            </div>
            <div className={styles.imgContainer}>
                <div className={styles.imgItem}>
                    <Image src={csharp} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        C#
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={javascript} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Javascript
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={typescript} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Typescript
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={python} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Python
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={java} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Java
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                FRONT-END
            </div>
            <div className={styles.imgContainer}>
                <div className={[styles.imgItem, styles.img2nd].join(" ")}>
                    <Image src={angular} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Angular
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={react} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        React
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={next} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        NextJS
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                BACK-END
            </div>
            <div className={styles.imgContainer2}>
                <div className={[styles.imgItem, styles.img2nd].join(" ")}>
                    <Image src={net} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        .NET
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={node} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        NodeJS
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                MOBILE
            </div>
            <div className={styles.imgContainer2}>
                <div className={[styles.imgItem, styles.img2nd].join(" ")}>
                    <Image src={unity} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Unity
                    </div>
                </div>
                <div className={styles.imgItem}>
                    <Image src={android} height={200} width={200}></Image>
                    <div className={styles.imgTitle}>
                        Android Native
                    </div>
                </div>
            </div>
        </section>
    );
}