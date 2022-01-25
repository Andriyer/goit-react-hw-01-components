import PropTypes from 'prop-types';

export default function StatisticItem(props) {
  const { label, percentage } = props;
  return (
    <>
      <span className="label">{label} </span>
      <br/>
      <div className="percentage"> {percentage}%</div>
    </>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
