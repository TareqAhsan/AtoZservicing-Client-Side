import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const EXperts = () => {
  const { experts } = useAuth();
  return (
    <div>
      <Container>
        {!experts?.length ? (
          <Spinner animation="grow" variant="success" style={{height:'3rem',width:'3rem'}}/>
        ) : (
          <>
            <h2 className="display-6 py-3">Meet Out Experts</h2>
            <Swiper
              loop={true}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
            >
              {experts?.map((expert) => (
                <SwiperSlide key={expert._id}>
                  <div
                    className="card h-100 shadow-lg border-0 m-4"
                    style={{ borderRadius: "13px" }}
                  >
                    <img
                      src={`data:image/jpeg;base64,${expert.image}`}
                      className="card-img-top"
                      alt="..."
                      style={{ borderRadius: "13px", height: "240px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-danger">{expert.name}</h5>
                      <p className="card-text"> {expert.expertise}</p>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </Container>
    </div>
  );
};

export default EXperts;
