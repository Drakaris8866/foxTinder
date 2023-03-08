import {FC} from 'react'
import styles from './Title.module.scss'

interface ISubTitle {
    text: string
}

const SubTitle: FC<ISubTitle> = ({text}) => {
    return (
        <h3 className={styles.subTitle}>
            {text}
        </h3>
    );
}

export default SubTitle;