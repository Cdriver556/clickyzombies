import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper">{props.children}<iframe width="1381" height="480" src="https://www.youtube.com/embed/9XaS93WMRQQ?autoplay=1" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen ></iframe></div>;

export default Wrapper;