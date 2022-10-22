import { Stats } from 'components/Stats/Stats';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
           {title && <h2 className={css.title}>{title}</h2>}
        
            <ul className={css.statList}>
                {stats.map(({id, label, percentage}) => (
                   <Stats key={id} label={label} percentage={percentage}/>)
                )}                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    states: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};