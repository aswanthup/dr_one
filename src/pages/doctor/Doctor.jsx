import React, { useState } from "react";
import Footer from "../../components/Footer";
import "../doctor/doctor.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Headroom from "react-headroom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import $ from "jquery"; // Import jQuery
import Navbar from "../../components/Navbar";
export default function Doctor() {
  const [visibleContent, setVisibleContent] = useState(2);
  const content = [
    $(document).ready(function () {
      $(".content").slice(0, 2).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 2).slideDown();
        if ($(".content:hidden").length == 0) {
          $("#loadMore").text("No Content").addClass("noContent");
        }
      });
    }),
  ];

  const showMoreContent = () => {
    console.log("first");
    setVisibleContent((prev) => prev + 1); // Increase visible content count by 4 on click
  };

  return (
    <div>
      <Headroom className="head">
        <Navbar />
      </Headroom>

      <div className="desktop container">
        <div className="doctor-banner">
          <div className="second-main-head doctor-head">
            <h1>
              Find <span> Doctors</span> From
            </h1>
            <h1> Your Location </h1>
          </div>
          <div className="doctor-details flex">
            <div className="just flex" style={{ gap: "40px" }}>
              <div>
                <div>
                  <h1 style={{ color: "white" }}>30 +</h1>
                </div>
                <div>
                  <h3>Consultations</h3>
                </div>
              </div>
              <div>
                <div>
                  <h1 style={{ color: "white" }}>34 +</h1>
                </div>
                <div>
                  <h3>Specialties</h3>
                </div>
              </div>
            </div>
            <div className="hello">
              <img
                className="doctor-main-img"
                src="images/doc-main.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="Doctor-search-box flex">
          <div className="Doctor-container-search flex">
            <div className="Doctor-Search-box flex">
              <div className="Doctor-location-section flex">
                <i className="ri-map-pin-2-line" />
                <input
                  className="Doctor-Location-input"
                  type="text"
                  placeholder="Kozhikode"
                />
              </div>
              <div className="Doctor-search-input flex">
                <input type="text" placeholder="Search Doctor" />
              </div>
              <div className="Doctor-search-section flex">
                <i className="ri-search-2-line" />
              </div>
            </div>
          </div>
        </div>

        <div className="our-specialities">
          <div className="second-main-head">
            <h1>
              Find Doctor by <span className="color-blue">Health Concern</span>
            </h1>
          </div>

          <Swiper
            navigation={{
              nextEl: ".nextButton",
              prevEl: ".prevButton",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="home-specialties-cards2" id="style-2">
                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/1 (2).jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Periods doubts or</h4>
                    <h4>Pregnancy</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/1 (6).jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Acne, pimple or</h4>
                    <h4>skin issues</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/1 (1).jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Cold, cough or</h4>
                    <h4>Fever</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/1 (4).jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Depression or</h4>
                    <h4>Anxiety</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/1 (5).jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Child not feeling</h4>
                    <h4>well</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="home-specialties-cards2" id="style-2">
                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/cardio.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Heart Failure or</h4>
                    <h4>Attack</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/ortho.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Back Pain,Ligament </h4>
                    <h4>Fracture</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/neu.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Alzheimer's,</h4>
                    <h4>Epilepsy</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/pul.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Asthma</h4>
                    <h4>Pneumonia</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/gastro.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Constipation,</h4>
                    <h4>Acidity</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="home-specialties-cards2" id="style-2">
                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/ophtha.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Cataract,</h4>
                    <h4>Glaucoma</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/ENT.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Hearing Loss,</h4>
                    <h4>Ear Infection</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/det.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Cavities,</h4>
                    <h4>Gum disease</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/cos.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Asthma</h4>
                    <h4>Pneumonia</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>

                <div className="home-specialties-card home-specialties-card2 flex">
                  <div className="home-specialties-image">
                    <img src="/images/neph.jpg" alt="" />
                  </div>
                  <div className="home-specialties-titile">
                    <h4>Kidney failure,</h4>
                    <h4>Kidney stones</h4>
                  </div>
                  <div className="home-specialties-button">
                    <h4>Consult Now</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-new-buttons flex">
          <button className="prevButton">
            <i class="ri-arrow-left-fill"></i>
          </button>
          <button className="nextButton">
            <i class="ri-arrow-right-fill"></i>
          </button>
        </div>

        <div className="doctor_spe"></div>

        <div className="doctor_spec flex">
          <div className="doctor_spec_card">
            <div className="spec_main_cards flex">
              <div className="spec_main_card flex">
                <h4>Gynaecology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>Dermatology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>General medicine</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>

            <div className="spec_main_cards spec_main_cards2 flex">
              <div className="spec_main_card flex">
                <h4>Mental health</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>Pediatrics</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>Cardiology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>

            <div className="spec_main_cards spec_main_cards2 flex">
              <div className="spec_main_card flex">
                <h4>Orthopedic</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>Neurology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>Pulmonology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>

            <div className="spec_main_cards spec_main_cards2 flex">
              <div className="spec_main_card flex">
                <h4>Gastrology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>Ophthalmology</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>

              <div className="spec_main_card flex">
                <h4>ENT</h4>

                <div className="spec_main_card_button flex">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space"></div>

        <div className="Featured-partner">
          <div className="second-main-head">
            <h1>
              Our <span className="color-blue">Featured</span> Partners
            </h1>
          </div>

          <div className="featured-doctor flex">
            <div className="featured-doctor-card flex">
              <div className="featured-doctor-card-photo">
                <img src="images/dr (4).jpg" alt="" />
              </div>

              <div className="featured-doctor-card-datas flex">
                <h2>Dr.Rohith Raj</h2>
                <h4 style={{ color: "#3A65FD" }}>Dentist,Cosmetic</h4>
              </div>

              <div className="featured-doctor-card-button">
                <a href="">
                  <h4>View Profile</h4>
                </a>
              </div>
            </div>

            <div className="featured-doctor-card flex">
              <div className="featured-doctor-card-photo">
                <img src="images/dr (3).jpg" alt="" />
              </div>

              <div className="featured-doctor-card-datas flex">
                <h2>Dr.Rohith Raj</h2>
                <h4 style={{ color: "#3A65FD" }}>Dentist,Cosmetic</h4>
              </div>

              <div className="featured-doctor-card-button">
                <a href="">
                  <h4>View Profile</h4>
                </a>
              </div>
            </div>

            <div className="featured-doctor-card flex">
              <div className="featured-doctor-card-photo">
                <img src="images/dr (2).jpg" alt="" />
              </div>

              <div className="featured-doctor-card-datas flex">
                <h2>Dr.Rohith Raj</h2>
                <h4 style={{ color: "#3A65FD" }}>Dentist,Cosmetic</h4>
              </div>

              <div className="featured-doctor-card-button">
                <a href="">
                  <h4>View Profile</h4>
                </a>
              </div>
            </div>

            <div className="featured-doctor-card flex">
              <div className="featured-doctor-card-photo">
                <img src="images/dr (1).jpg" alt="" />
              </div>

              <div className="featured-doctor-card-datas flex">
                <h2>Dr.Rohith Raj</h2>
                <h4 style={{ color: "#3A65FD" }}>Dentist,Cosmetic</h4>
              </div>

              <div className="featured-doctor-card-button">
                <a href="">
                  <h4>View Profile</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-screen container">
        <div className="mobile-second-heading">
          <h1>
            Find <span className="color-blue "> Doctors</span> From Your
            Location
          </h1>
        </div>

        <div className="doctor-banner-image flex">
          <img src="images/doc-main.png" alt="" />
        </div>

        <div className="doctor-mobile-content">
          <div className="doctor-details flex">
            <div className="just flex" style={{ gap: "40px" }}>
              <div>
                <div>
                  <h1 style={{ color: "white" }}>30 +</h1>
                </div>
                <div>
                  <h4>Consultations</h4>
                </div>
              </div>
              <div>
                <div>
                  <h1 style={{ color: "white" }}>34 +</h1>
                </div>
                <div>
                  <h4>Specialties</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-doctor-specialties">
          <div className="mobile-second-heading">
            <h1>
              Our <span className="color-blue ">Specialties</span>
            </h1>
          </div>
          <div class="container1">
            <div class="flex1">
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                {" "}
                <div className="mobile-specialties-card flex">
                  <div className="mobile-specialties-image">
                    <img src="images/lab2.jpg" alt="" />
                  </div>

                  <div className="mobile-specialties-data flex">
                    <h4>Period doubts or Pregnancy</h4>
                    <a href="">
                      <h4 className="mobile-specialties-button">Consult Now</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h4>
              {" "}
              <a href="#" id="loadMore" onClick={showMoreContent}>
                Load More
              </a>
            </h4>

            <div>
              {content.slice(0, visibleContent).map((item, index) => (
                //   <div key={index} className="content">
                //    {/* Render your content here */}
                //  </div>
                <></>
              ))}
              {visibleContent < content.length && (
                <button id="loadMore" onClick={showMoreContent}>
                  Load More
                </button>
              )}
              {visibleContent >= content.length && (
                <button id="loadMore" className="noContent" disabled>
                  {/* No Content h */}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mobile-Our-Featured-Partners">
          <div className="mobile-second-heading">
            <h1>
              Our <span className="color-blue ">Featured</span> Partner
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
