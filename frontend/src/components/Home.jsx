import React from "react";
import Button from "./Button/index";
import "./styles.css";
import iphone from '../assets/iphone.png';
import gradient from '../assets/gradient.png';
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track <br />  📈NSE
          <br />data in
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ fontWeight: 'bold', fontSize: '1.3rem' }}
        >
          Track 📈 National Stock Exchange data through a public API in real-time. Visit the dashboard to do so!
        </motion.p>

        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >

          <Link to="/dashboard">
            <Button text={"Dashboard"} style={{ backgroundColor: 'black' }} />
          </Link>
          {/* <a href="/dashboard">
          <Button text={"Dashboard"} style={{ backgroundColor: 'black' }} />
          </a> */}
          <RWebShare
            data={{
              text: "CryptoDashboard made by using React JS.",
              title: "CryptoStock.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={""} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;
