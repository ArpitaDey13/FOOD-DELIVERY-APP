import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
function Header() {

  useEffect(()=>{
    const toggleMenu = document.querySelector(".toggleMenu");

    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <div className='header'>
      <img src="https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp-55b3a.appspot.com/o/logo-color.png?alt=media&token=9be8569b-e61f-4192-9bde-76d87edc4315&_gl=1*pgyqmi*_ga*MTY4MTUzNjY1Mi4xNjk3NDQxMjc1*_ga_CW55HF8NVT*MTY5ODAzNDIxMS4xMC4xLjE2OTgwMzU1NTcuNDMuMC4w" 
      alt=""
      className='logo' />

      <div className="inputBox">
        <SearchIcon className='searchIcon'/>
        <input type='text' placeholder='Search'/>
      </div>

      <div className="shoppingCart">
        <ShoppingCartIcon className='cart'/>
        <div className="cart_content">
            <p>2</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
            <img src='https://firebasestorage.googleapis.com/v0/b/fooddeliveryapp-55b3a.appspot.com/o/Picsart_22-07-28_13-01-22-453.jpg?alt=media&token=3df33d5a-d0e7-49a9-b426-0de947f5f737&_gl=1*15jsybl*_ga*MTY4MTUzNjY1Mi4xNjk3NDQxMjc1*_ga_CW55HF8NVT*MTY5NzYwNjc4Ny4yLjEuMTY5NzYwNzE3MS4zNS4wLjA.' 
            alt=''
            className='profilePic'
            />
        </div>
        <h2 className='userName'>Arpita Dey</h2>
      </div>

      <div className="toggleMenu">
        <BarChartIcon className="toggleIcon"/>
      </div>
    </div>
  )
}

export default Header
