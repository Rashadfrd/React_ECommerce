import React from "react";
import Slider from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import classes from "./style.module.css";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

function HomeProducts() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={classes.homeProducts}>
      <Tabs>
        <TabList className={classes.customTabList}>
          <Tab
            selectedClassName={classes.customTabSelected}
            className={classes.customTab}
          >
            Best Sellers
          </Tab>
          <Tab
            selectedClassName={classes.customTabSelected}
            className={classes.customTab}
          >
            New Arrivals
          </Tab>
          <Tab
            selectedClassName={classes.customTabSelected}
            className={classes.customTab}
          >
            Sale
          </Tab>
        </TabList>

        <TabPanel className={classes.customTabPanel}>
          <Slider {...settings}>
            <div className={classes.productItem}>
              <Link to='products/p-1' className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </Link>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
            <div className={classes.productItem}>
              <div className={classes.prodImg}>
                <img className={classes.prodImgItem} src="https://s3-alpha-sig.figma.com/img/29b1/a024/43c8a5fa3d4df8ba44931c087a5e828d?Expires=1693785600&Signature=L3y4gYuaNkEfOqWUWGRfM~JM1x6uq22t7SImGozMmhDdol0FoTle2GlGNQVI0XMjqJsW-eUhV8jniLV2ZjyrnhPkhHG5Iis9Vt54QOXvGiw8Nm3q~0ySsfmm8-V1Kafhze1mEs4RyDnfaIV68YeZHjc0oBkf6D2FKw3ETD3O-yN6aH3F0bjrjoK-zYB5gDtylaFuzOaCgbzcpj6r3fbQMGBwqH9CacJMFTP9jaTMM~YW3mQw2~TGVa0r3mbcFW-PMdZeH3L~2WRFxXDLeW0mQmZutc~GNIJFUCwHQJKCNoQxvWEkNSwHompcWVd4t0n0ITNNMC4K5Enu~Q~XWEVm1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              </div>
              <div className={classes.prodName}>
                Jordan Max Aura
              </div>
              <div className={classes.prodPrice}>
                <span className={classes.newPrice}>256.00</span>
                <span className={classes.oldPrice}>299.00</span>
              </div>
            </div>
          </Slider>
        </TabPanel>

        <TabPanel className={classes.customTabPanel}>unqavaa</TabPanel>

        <TabPanel className={classes.customTabPanel}>unqava</TabPanel>
      </Tabs>
    </section>
  );
}

export default HomeProducts;
