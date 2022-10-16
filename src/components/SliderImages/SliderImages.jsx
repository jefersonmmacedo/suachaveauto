  import Carousel, { slidesToShowPlugin, arrowsPlugin  } from '@brainhubeu/react-carousel';
  import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline, IoCloseOutline  } from 'react-icons/io5';
  import '@brainhubeu/react-carousel/lib/style.css';
  import ImageHouse1 from "../../assets/images/house.jpg";
  import ImageHouse2 from "../../assets/images/house1.jpg";
  import ImageHouse3 from "../../assets/images/house2.jpg";
  import ImageHouse4 from "../../assets/images/house4.jpg";
  import ImageHouse5 from "../../assets/images/house5.jpg";
  import ImageHouse6 from "../../assets/images/house6.jpg";
import { SliderImagesModal } from '../SliderImagesModal/SliderImagesModal';
import Modal from 'react-modal';
import { useState } from "react";
import "./sliderImages.css"
  
  
  
  export function SliderImages() {
    const [isOpenModal, setIsOpenModa] = useState(false);

    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false)
        window.location.reload();
      }

    Modal.setAppElement('#root');
    const fadeImages = [
        {
        url: ImageHouse1,
        caption: 'First Slide'
        },
        {
        url: ImageHouse2,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse3,
        caption: 'Third Slide'
        },
        {
        url: ImageHouse4,
        caption: 'First Slide'
        },
        {
        url: ImageHouse5,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse6,
        caption: 'Third Slide'
        },
        {
        url: ImageHouse1,
        caption: 'First Slide'
        },
        {
        url: ImageHouse2,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse3,
        caption: 'Third Slide'
        },
        {
        url: ImageHouse4,
        caption: 'First Slide'
        },
        {
        url: ImageHouse5,
        caption: 'Second Slide'
        },
        {
        url: ImageHouse6,
        caption: 'Third Slide'
        },
      ];
      return (
        <>
          <Carousel
          plugins={[
              'infinite',
              'centered',
              {
              resolve: slidesToShowPlugin,
              options: {
                addArrowClickHandler: true,
              numberOfSlides: 6
              }
              },
          ]}
          breakpoints={{
            950: {
              plugins: [
                  'infinite',
                  'centered',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 4
                 }
               }]},
            800: {
              plugins: [
                  'infinite',
                  'centered',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 3
                 }
               }]},
            650: {
              plugins: [
                  'infinite',
                  'centered',
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               }]}
              }}
          >

            {fadeImages.map((image) => {
                return (
                    <img src={image.url} width="100%" height="100%" onClick={handleOpenModal}/>
                )
            })}

          </Carousel>

          <Modal isOpen={isOpenModal} onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={handleCloseModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal">
            <div className="itensModal">
                <SliderImagesModal />
            <h5>Arraste para o lado</h5>
            </div>
            </div>
            </Modal>
          </>
        )
  }