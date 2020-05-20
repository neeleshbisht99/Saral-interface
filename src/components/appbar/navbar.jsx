import React, { useState, useEffect } from 'react';
import TabList from '@mapbox/mr-ui/tab-list';
const items = [
  {
    id: 'Home',
    label: 'Home',
  },
  {
    id: 'About',
    label: 'About',
  },
  {
    id: 'Team',
    label: 'Team',
  },
  {
    id: 'Blog',
    label: 'Blog',
  },
];

function Navbar() {
  const [active, setActive] = useState('Home');
  const changeTab = id => {
    setActive(id);
  };

  return (
    <React.Fragment>
      <div className="px0 ">
        <div className=" w-auto flex-parent flex-parent--center-main">
          <div className="flex-child">
            <TabList onChange={changeTab} activeItem={active} items={items} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Navbar;
