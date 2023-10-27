import React from 'react';
import {CurrencyRupeeRounded} from "@mui/icons-material";

function BannerName({name, discount, more}) {
  return (
    <div className='bannerContent'>
      <h3>Hello {name},</h3>
      <p>
        Get free discount for every <span><CurrencyRupeeRounded />{`${discount}`}</span>{" "} purchase
      </p>
      <a href={more}>Learn more</a>
    </div>
  );
}

export default BannerName;
