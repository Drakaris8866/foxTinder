import {FC} from 'react'
import styles from './Title.module.scss'

interface ITitle {
    text: string
}

const Title: FC<ITitle> = ({text}) => {
    return (
        <h2 className={styles.title}>{text}</h2>
    );
}

export default Title;