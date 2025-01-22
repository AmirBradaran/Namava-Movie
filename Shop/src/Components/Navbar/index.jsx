import React from "react";
import "./index.css";
import { BoxIconElement } from "boxicons";
export default function Navbar() {
  // const {token}=useSelector(state=>)
  return (
    <header>
      <section class="navBar">
        <div class="navBarBtns">
          <button>
            <a>ورود | ثبت نام</a>
          </button>
          <button>
            <a>خرید اشتراک</a>
          </button>
        </div>
        <div class="navBarIconsSearch">
          <a>
            <i class="bx bx-mobile-alt" style="color:#ffffff"></i>
          </a>
          <a>
            <i class="bx bx-shuffle" style="color:#ffffff"></i>
          </a>
          <a>
            <i class="bx bx-search bx-rotate-90" style="color:#ffffff"></i>
          </a>
        </div>
        <div class="navBarList">
          <a>خانه</a>
          <a>کودکان</a>
          <a>پردیس نماوا</a>
          <a>نماوا مگ</a>
        </div>
        <div class="navBarLogo">
          <h2>نماوا</h2>
        </div>
      </section>
      <section class="slider">
        <div class=" sliderImg , show">
          <img src alt />
        </div>
        <div class="sliderImg">
          <img src alt />
        </div>
        <div class="sliderImg">
          <img src alt />
        </div>
        <div class="sliderImg">
          <img src alt />
        </div>

        <span class="sliderArrows">
          <i class="bx bxs-chevron-right  next-slider"></i>
          <i class="bx bxs-chevron-left  prev-slider"></i>
        </span>
      </section>
    </header>
  );
}
