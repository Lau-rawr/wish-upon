import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import { Popover} from 'reactstrap';

export default function PopoverPicker(props) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className="color-palette2">
      {/* <div className="picker"> */}
      <div
        // className="swatch"
        className="picker"
        style={{ backgroundColor: props.currentColor }}
        id="Popover1"
        onClick={() => toggle(true)}
      />

      {popoverOpen && (
        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
          <HexColorPicker color={props.currentColor} onChange={props.changeColor} />
        </Popover>
      )}
    </div>
  );
};
