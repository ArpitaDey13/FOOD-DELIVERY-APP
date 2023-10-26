import React from 'react';
import {CurrencyRupeeRounded} from "@mui/icons-material";

function BannerName({name}) {
  return (
    <div className='bannerContent'>
      <h3>Hello {name}</h3>
      <p>
        Get free discount for every <span><CurrencyRupeeRounded />500</span> purchase
      </p>
      <a href='link'>Learn more</a>
    </div>
  )
}

export default BannerName;
