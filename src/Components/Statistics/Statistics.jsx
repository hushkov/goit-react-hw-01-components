import PropTypes from 'prop-types';
import s from 'Components/Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  function getColor() {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(obj => (
          <li
            className={s.item}
            key={obj.id}
            style={{ backgroundColor: getColor() }}
          >
            <span className={s.label}>{obj.label}</span>
            <span className={s.percentage}>{obj.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
