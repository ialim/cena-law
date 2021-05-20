const location = [
  {
    id: 0,
    title: "New York",
    selected: false,
    key: "location",
  },
  {
    id: 1,
    title: "Dublin",
    selected: false,
    key: "location",
  },
  {
    id: 2,
    title: "California",
    selected: false,
    key: "location",
  },
  {
    id: 3,
    title: "Istanbul",
    selected: false,
    key: "location",
  },
  {
    id: 4,
    title: "Izmir",
    selected: false,
    key: "location",
  },
  {
    id: 5,
    title: "Oslo",
    selected: false,
    key: "location",
  },
];

interface DropdownProp {
  title: string;
  list: Object[];
}

const Dropdown = ({ title = "Select Location", list = Location }) => {
  return (
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title"></div>
      </div>
      <div className="dd-list">
        <button className="dd-list-item"></button>
        <button className="dd-list-item"></button>
        <button className="dd-list-item"></button>
      </div>
    </div>
  );
};

export default Dropdown;
