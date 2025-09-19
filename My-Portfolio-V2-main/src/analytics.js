// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-00WQNW168X"); // Replace with your actual GA ID
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
