import { Component } from "react";
import styles from "./Logo.module.css";

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo}>
        <a href="./" style={{ display: "flex", alignContent: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536.73 665.26">
            <path
              d="M432.23,268.36c0-90.35-73.51-163.87-163.87-163.87S104.49,178,104.49,268.36a162.84,162.84,0,0,0,24,85.29l29.37-29.37a123.88,123.88,0,1,1,57.24,55.9l-29.54,29.54a162.8,162.8,0,0,0,82.8,22.51C358.72,432.23,432.23,358.72,432.23,268.36Z"
              transform="translate(0 0)"
            />
            <path d="M87.44,394.52" transform="translate(0 0)" />
            <path class="cls-1" d="M256.32,242.44" transform="translate(0 0)" />
            <path
              d="M458.12,78.6A268.36,268.36,0,0,0,0,268.36c0,41.3,19.68,93.56,58.5,155.4l28.86-28.87.08-.37C56,342.82,40,300.42,40,268.36,40,142.44,142.44,40,268.36,40S496.73,142.44,496.73,268.36c0,51.41-41.33,129.92-119.51,227C333.86,549.25,290,595.09,268.36,617c-28-28.42-93.27-96.94-146.91-171.5l89.18-89.18,3.06,3.07a35.46,35.46,0,0,0,50.14,0l58-58h0l40.58-40.58a11.76,11.76,0,0,0-16.63-16.63l-40.58,40.58-20.73,20.73a11.76,11.76,0,0,1-16.63-16.63l20.73-20.73,40.58-40.58A11.76,11.76,0,0,0,312.48,211L271.9,251.57,251.17,272.3a11.76,11.76,0,0,1-16.63,0h0a11.76,11.76,0,0,1,0-16.63l20.73-20.73,40.58-40.58a11.76,11.76,0,0,0,0-16.63h0a11.76,11.76,0,0,0-16.63,0l-40.58,40.58L217.91,239l-37.23,37.24a35.43,35.43,0,0,0,0,50.13l1.66,1.67L81.25,429.17A20,20,0,0,0,79,454.7c73.37,105.94,171.39,201,175.52,205a20,20,0,0,0,27.78,0A1664.5,1664.5,0,0,0,408.12,520.8c85.34-105.94,128.61-190.87,128.61-252.44A266.61,266.61,0,0,0,458.12,78.6Z"
              transform="translate(0 0)"
            />
          </svg>
        </a>
        <h1>
          <a href="./">FoodOrder</a>
        </h1>
      </div>
    );
  }
}

export default Logo;
