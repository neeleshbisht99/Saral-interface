import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import Badge from '@mapbox/mr-ui/badge';
import './index.css';
import IconText from '@mapbox/mr-ui/icon-text';
import Icon from '@mapbox/mr-ui/icon';
function Instructor(props) {
  const [instructionState, setInstructionState] = useState(false);

  const handleClick = () => {
    setInstructionState(!instructionState);
  };

  return (
    <React.Fragment>
      <div className="instructionContainer">
        <button className="instructionButton" onClick={handleClick}>
          {instructionState ? (
            <span>
              Close instructions &nbsp;
              <span className="inline-block color-white">
                <Icon name="close" inline={true} />
              </span>{' '}
            </span>
          ) : (
            <span>
              Open instructions &nbsp;
              <span className="inline-block color-white">
                <Icon name="chevron-down" inline={true} />
              </span>{' '}
            </span>
          )}
        </button>
        <Collapse isOpened={instructionState}>
          {/* <div className="collapsedInstructionContainer"> */}
          <div className="menu-instruction-head">Following are the steps:</div>
          <div className="menu-instruction-content">
            <ul>
              <li>
                {' '}
                To find trash-bins near you, click the{' '}
                <Badge
                  badgeText="Near Me"
                  coloring="purple"
                  tooltipText="This will locate the map at your real-time location."
                />{' '}
                button.
              </li>
              <li>
                Or to find trash-bins anywhere around the world, enter the
                location in &nbsp;
                <Badge
                  badgeText="Search"
                  coloring="blue"
                  tooltipText="This will locate the map at the entered location."
                />{' '}
                bar above.
              </li>
              <li>
                Then click on one of the nearest
                <span className="inline-block color-blue">
                  <Icon name="marker" inline={true} />
                  marker
                </span>{' '}
                as suitable to you.
              </li>
              <li>
                Finally the
                <span className="inline-block color-orange">
                  <Icon name="compass" inline={true} />
                  route
                </span>{' '}
                will be generated from your location to one of the bins.
              </li>
              <li>
                Now just
                <span className="inline-block color-green">
                  <Icon name="walk" inline={true} />
                  walk
                </span>{' '}
                until you reach your destination.
              </li>
            </ul>
          </div>
          {/* </div> */}
        </Collapse>
      </div>
    </React.Fragment>
  );
}
export default Instructor;
