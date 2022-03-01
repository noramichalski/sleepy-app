import './Dropdown.css';

import generateDurationList from '../js/utils/generateDurationList';

const Dropdown = (props) => {
  const {label, handleSelect, value} = props;
  const displayDurations = generateDurationList(0, 24);
  // const convert

  return (
    <div className="Dropdown">
      <label className="Dropdown-label">{label}:</label>
      <select
        className="Dropdown-select"
        name={label}
        onChange={event => handleSelect(event.target.value)}
        value={value}
      >
        {displayDurations.map((duration, index) => {
          return <option key={duration+index}>{duration}</option>
          })
        }
      </select>
      <p className="Dropdown-label-after">hours</p>
    </div>
  );
};



export default Dropdown;