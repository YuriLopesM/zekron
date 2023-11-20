import styles from './styles.module.scss';

export interface ISituation {
    description: string;
    hour: string;
    status?: 'normal' | 'wrong';
}
export const SituationText = ({
    hour,
    description,
    status = 'normal'
}: ISituation) => {
    const statusColor = {
        normal: {
            color: '#61C0BF'
        },
        wrong: {
            color: '#C06161'
        }
    }

    return (
        <div className={styles.container} style={statusColor[status]}>
            <p>{hour} - &nbsp;</p>
            <p>{description}</p>
        </div>
    )
}