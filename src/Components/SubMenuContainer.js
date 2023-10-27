import React from 'react';
import {ChevronRightRounded} from '@mui/icons-material';

function SubMenuContainer({ name }) {
  return (
    <div className='subMenuContainer'>
      <h3>{name}, what's on your mind?</h3>
      <div className="viewAll">
        <p>View All</p>
        <i><ChevronRightRounded /></i>
      </div>
    </div>
  );
}

export default SubMenuContainer;
