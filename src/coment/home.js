import React from 'react';
import image1 from "./aya.webp";
import { Image,Stack } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {motion} from 'framer-motion'

function Home() {
  const imgStyle = {
    width: '100%',
    maxHeight: '600px',
    maxWidth: '100%',
    display: 'block',
  };
  const text = {
    position: 'absolute',
    top: '5%',
    left:'4%',
    color: 'white',
    maxWidth:'50%'
  };


  const styleMediaQuery = `
    @media screen and (max-width: 760px) {
      .text-over-image {
        font-size: 10px;
      }
      .btn {
        margin-left: 60px;
      }
      .zakarya{
        height:20px;
      }
    }
  `;

  return (
    <>
    <motion.div>
      <div style={{ position: 'relative' }}>
        <img className='img-fluid' src={image1} alt='KrallePet' style={imgStyle} />
        <div className="text-over-image" style={text}>
          <p className='text text-center'>
            Petbu is a manufacturer of scratching posts and cat playgrounds.
            KrallePet produces quality constructions designed with the needs of cats in mind. 
            KrallePet scratching posts and cat trees provide maximum comfort and safety for your pet. 
            We use a strong frame, thick winding ropes, durable upholstery material, and first-class accessories.
          </p>
          <Button variant="outline-light" style={{ fontSize: '10px',marginLeft:'40px' }}>PRODUCTS -></Button>
        </div>
      </div>
    </motion.div>
    <style>{styleMediaQuery}</style>
    </>
  );
}

export default Home;
