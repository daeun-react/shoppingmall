import React from "react";
import { Checkbox, Collapse } from "antd";
import { useState } from "react";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]); //[1,2,3 ...]

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    // console.log(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists =
    props.list &&
    props.list.map((value, index) => {
      return (
        <div key={index}>
          <Checkbox
            type="checkbox"
            onChange={() => handleToggle(value._id)}
            checked={Checked.indexOf(value._id) === -1 ? false : true}
          />
          <span>
            {value.name}
            <br />
          </span>
        </div>
      );
    });

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Continents" key="1">
          {renderCheckboxLists}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
