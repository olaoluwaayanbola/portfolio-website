(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 20,
  text: 'Open Source Projects'
}, {
  number: 1000,
  text: 'Students'
}, {
  number: 1900,
  text: 'Github Followers'
}, {
  number: 5000,
  text: 'Github Stars'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Personal Achievements"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
    children: data.map((card, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
        children: `${card.number}+`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
        children: card.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;
const Box = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`;
const BoxNum = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`;
const BoxText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
const Join = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;
const JoinText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5)`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`;
const IconContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`;

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\Footer\\Footer.js";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkList, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Call"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "tel:314-343-3432",
          children: "314-343-3432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "mailto:contact@jsmastery.com",
          children: "contact@jsmastery.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIconsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.CompanyContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Slogan, {
          children: "Innovating one project at a time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://google.com",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://google.com",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://google.com",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillInstagram, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;
const LinkItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`;
const SocialIconsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`;
const CompanyContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`;
const Slogan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`;
const SocialContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`;
const LinkList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`;
const LinkColumn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`;
const LinkTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`;

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
          display: 'flex',
          alignItems: 'center',
          color: "white"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiCssdeck, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 37
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#tech",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Technologies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://google.com",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://google.com",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://google.com",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const Div1 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
const Div2 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
const Div3 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`; // Navigation Links

const NavLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`; /// DropDown Contact

const ContactDropDown = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${props => props.theme.breakpoints.md} {
    padding: 0;
  }
`;
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({
  isOpen
}) => isOpen ? '1' : '.75'};
  transform: ${({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)'};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`; // Social Icons 

const SocialIcons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");


var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\Hero\\Hero.js";





const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
    row: true,
    nopadding: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        main: true,
        center: true,
        children: ["Welcome To ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 22
        }, undefined), "My Personal Portfolio"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: props.handleClick,
        children: "Learn More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  nopadding: true,
  id: "projects",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    main: true,
    children: "Projects"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map((p, i) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          src: p.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
            title: true,
            children: p.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
          className: "card-info",
          children: p.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: "Stack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
            children: p.tags.map((t, i) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                children: t
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 26
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
            href: p.visit,
            children: "Code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
            href: p.source,
            children: "Source"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;
const GridContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${props => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`;
const BlogCard = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
const TitleContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  z-index: 20;
  width: 100%;

`;
const HeaderThree = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3)`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${props => props.title ? '3rem' : '2rem'};
`;
const Hr = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr)`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;
const Intro = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;
const CardInfo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${props => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;
const UtilityList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
const ExternalLinks = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;
const TagList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
display: flex;
justify-content: space-around;
padding: 2rem;
`;
const Tag = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
color: #d8bfbf;
font-size: 1.5rem;
`;

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    divider: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Technologies"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
    children: "I've worked with a range a technologies in the web development world. From Back-end To Design"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.List, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiReact, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Front-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experiece with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 28
          }, undefined), "React.js"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiFirebase, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Back-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, undefined), "Node and Databases"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiZend, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "UI/UX"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, undefined), "tools like Figma"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    colorAlt: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
const MainImage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width: 100%;
`;
const List = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;
const ListContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;
const ListTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`;
const ListParagraph = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;
const ListItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`;
const ListIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");


var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  "fill-opacity": "0.33"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      "stop-color": "white"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      offset: "0.79478",
                      "stop-color": "white",
                      "stop-opacity": "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, undefined))
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
const CarouselMobileScrollNode = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({
  final
}) => final ? `120%;` : `min-content`}
  }
`;
const CarouselItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`;
const CarouselItemTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const CarouselItemImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg)`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;
const CarouselItemText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
const CarouselButtons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;
const CarouselButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${props => props.active === props.index ? `1` : `.33`};
  transform: ${props => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;
const CarouselButtonDot = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: 'Odun pizza',
  description: "Using React,Next js,Mongoose & MongoDB i learnt how to build a Full Stack  Application - from start to finish. This app is called odun and it is a functioning food ordering site   ",
  image: '/images/foodH.png',
  tags: ['MongoDB', 'Next js', 'React', 'Paypal', "Contex API"],
  source: 'https://github.com/olaoluwaayanbola/odun-pizza',
  visit: 'https://github.com/olaoluwaayanbola/odun-pizza',
  id: 0
}, {
  title: 'Asotuntun.c',
  description: "While building this project i learnt how to integrate Context API into a react application and learnt one of the best ways to authenticate routes in react using the Context API",
  image: 'images/ecomHom.jpeg',
  tags: ['React', 'Context API', 'Firebase Auth', 'Route Auth'],
  source: 'https://github.com/olaoluwaayanbola/ecommerce/tree/SAVEPOINT/client',
  visit: 'https://asotuntun.netlify.app',
  id: 1
}, {
  title: 'Admin-dashboard',
  description: "This is a react admin dashboard building this app helped me further my knowledge of redux toolkit and some design concept",
  image: '/images/ad1.png',
  tags: ['React', 'Redux', "MUI", 'Recharts', 'Figma', "SASS"],
  source: 'https://github.com/olaoluwaayanbola/react-admin-dash',
  visit: 'https://react-admin-fxx.netlify.app/',
  id: 2
}, {
  title: 'Netflix-clone',
  description: "This is a netflix clone made with react it was my first react-project ",
  image: 'images/netflix.png',
  tags: ['React', 'React-Router-DOM', 'MUI', 'SASS'],
  source: 'https://github.com/olaoluwaayanbola/netflix-clone',
  visit: 'https://netflixclone-one.netlify.app/',
  id: 3
}, {
  title: 'Cryptoverse',
  description: "Cryptoverse is a webapp that provides current crypo data for users the most challenging aspect of builduing this web app was the implementation on the search functinality with the REST API  ",
  image: '/images/cryv.png',
  tags: ['React', 'Redux toolkit', "ANTD", 'Recharts', "Coingecko API"],
  source: 'https://github.com/olaoluwaayanbola/cryptoverse',
  visit: 'https://cryptoverse-fx.netlify.app',
  id: 2
}];
const TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
max-width: 1280px;
width: 100%;
margin: auto;
`;

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\840 G3\\Desktop\\Portfolio react-projects\\portfolio-website\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  display: ${props => props.grid ? "grid" : "flex"};
  flex-direction: ${props => props.row ? "row" : "column"};
  padding: ${props => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: ${props => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
const SectionTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`
  font-weight: 800;
  font-size: ${props => props.main ? '65px' : '56px'};
  line-height: ${props => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${props => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${props => props.main ? '56px' : '48px'};
    line-height: ${props => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${props => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${props => props.main ? '28px' : '32px'};
    line-height: ${props => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${props => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;
const SectionText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
const SectionDivider = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${props => props.divider ? "4rem 0" : ""};

  @media ${props => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
const SectionSubText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${props => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SecondaryBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
const ButtonBack = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: ${({
  alt
}) => alt ? '150px' : '262px'};
  height: ${({
  alt
}) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};

  @media ${props => props.theme.breakpoints.md} {
    width: ${({
  alt
}) => alt ? '150px' : '184px'};
    height: ${({
  alt
}) => alt ? '52px' : '48px'};
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
    margin-bottom: ${({
  alt
}) => alt ? '0' : '64px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({
  alt
}) => alt ? '0' : '32px'};
  }
`;
const ButtonFront = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
const LinkContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-left: ${({
  large
}) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: ${({
  large
}) => large ? '16px' : '8px'};

  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: ${({
  large
}) => large ? '0' : '8px'};
  }
`;
const LinkIconImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;  
  height: ${({
  large
}) => large ? '32px' : '24px'};

  @media ${props => props.theme.breakpoints.md} {
    height: ${({
  nav
}) => nav ? '16px' : '24px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: ${({
  large
}) => large ? '32px' : '16px'};
  }
`;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-92d9c1"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEM6XFxVc2Vyc1xcODQwIEczXFxEZXNrdG9wXFxQb3J0Zm9saW8gcmVhY3QtcHJvamVjdHNcXHBvcnRmb2xpby13ZWJzaXRlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiZGF0YSIsIm51bWJlciIsInRleHQiLCJBY29tcGxpc2htZW50cyIsIm1hcCIsImNhcmQiLCJpbmRleCIsIkJveGVzIiwic3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIkJveCIsImxnIiwiQm94TnVtIiwiQm94VGV4dCIsIkpvaW4iLCJKb2luVGV4dCIsIkljb25Db250YWluZXIiLCJCYWNrZ3JvdW5kQW5pbWF0aW9uIiwiRm9vdGVyIiwiRm9vdGVyV3JhcHBlciIsIkxpbmtJdGVtIiwiU29jaWFsSWNvbnNDb250YWluZXIiLCJDb21wYW55Q29udGFpbmVyIiwiU2xvZ2FuIiwiU29jaWFsQ29udGFpbmVyIiwiTGlua0xpc3QiLCJMaW5rQ29sdW1uIiwiTGlua1RpdGxlIiwiSGVhZGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjb2xvciIsIkNvbnRhaW5lciIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJDb250YWN0RHJvcERvd24iLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyIsIkhlcm8iLCJoYW5kbGVDbGljayIsIkxlZnRTZWN0aW9uIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInAiLCJpIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsInQiLCJ2aXNpdCIsInNvdXJjZSIsIkltZyIsIkdyaWRDb250YWluZXIiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyIsIlRlY2hub2xvZ2llcyIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsIkxpc3RDb250YWluZXIiLCJMaXN0VGl0bGUiLCJMaXN0UGFyYWdyYXBoIiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiVGltZUxpbmVEYXRhIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwiaGFuZGxlU2Nyb2xsIiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSIsInllYXIiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsImZpbmFsIiwiQ2Fyb3VzZWxJdGVtIiwiYWN0aXZlIiwiQ2Fyb3VzZWxJdGVtVGl0bGUiLCJDYXJvdXNlbEl0ZW1JbWciLCJDYXJvdXNlbEl0ZW1UZXh0IiwiQ2Fyb3VzZWxCdXR0b25zIiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsImlkIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJIb21lIiwiQnV0dG9uIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwib25DbGljayIsIlNlY3Rpb24iLCJncmlkIiwicm93Iiwibm9wYWRkaW5nIiwiU2VjdGlvblRpdGxlIiwibWFpbiIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvbkRpdmlkZXIiLCJjb2xvckFsdCIsImRpdmlkZXIiLCJTZWN0aW9uU3ViVGV4dCIsIlNlY29uZGFyeUJ0biIsIkJ1dHRvbkJhY2siLCJCdXR0b25Gcm9udCIsIkxpbmtDb250YWluZXIiLCJsYXJnZSIsIkxpbmtJY29uSW1nIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRFcsRUFFWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBRlcsRUFHWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBSFcsRUFJWDtBQUFFRCxRQUFNLEVBQUUsSUFBVjtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBSlcsQ0FBYjs7QUFPQSxNQUFNQyxjQUFjLEdBQUcsbUJBQ3JCLDhEQUFDLDZEQUFEO0FBQUEsMEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsY0FDR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLGtCQUNSLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0UsOERBQUMseURBQUQ7QUFBQSxrQkFBVSxHQUFFRCxJQUFJLENBQUNKLE1BQU87QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsa0JBQVVJLElBQUksQ0FBQ0g7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsT0FBVUksS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBVUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxl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LEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pELG1CQUFtQixDQUFDO0FBQUVtSTtBQUFGLENBQUQsS0FBZUEsS0FBSyxHQUFHLEdBQUgsR0FBUyxLQUFNO0FBQ3REO0FBQ0EsQ0FwQk87QUFzQkEsTUFBTUMsV0FBVyxHQUFHekksOERBQVc7QUFDdEM7QUFDQSxZQUFZLENBQUM7QUFBRXdJO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQU87QUFDbkQ7QUFDQSxXQUFZdkksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBRztBQUNqRCxjQUFjLENBQUM7QUFBRXNJO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQU87QUFDakQ7QUFDQTtBQUNBLFdBQVl6SSxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFHO0FBQ2pELGNBQWMsQ0FBQztBQUFFbUk7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFBTztBQUNyRDtBQUNBLENBWE8sQzs7Ozs7Ozs7Ozs7QUM3UVAseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gJy4vQWNvbXBsaXNobWVudHNTdHlsZXMnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7IG51bWJlcjogMjAsIHRleHQ6ICdPcGVuIFNvdXJjZSBQcm9qZWN0cycgfSxcclxuICB7IG51bWJlcjogMTAwMCwgdGV4dDogJ1N0dWRlbnRzJywgfSxcclxuICB7IG51bWJlcjogMTkwMCwgdGV4dDogJ0dpdGh1YiBGb2xsb3dlcnMnLCB9LFxyXG4gIHsgbnVtYmVyOiA1MDAwLCB0ZXh0OiAnR2l0aHViIFN0YXJzJywgfVxyXG5dO1xyXG5cclxuY29uc3QgQWNvbXBsaXNobWVudHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24+XHJcbiAgICA8U2VjdGlvblRpdGxlPlBlcnNvbmFsIEFjaGlldmVtZW50czwvU2VjdGlvblRpdGxlPlxyXG4gICAgPEJveGVzPlxyXG4gICAgICB7ZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxCb3hOdW0+e2Ake2NhcmQubnVtYmVyfStgfTwvQm94TnVtPlxyXG4gICAgICAgICAgPEJveFRleHQ+e2NhcmQudGV4dH08L0JveFRleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Cb3hlcz5cclxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgQm94ZXMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgNDBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMzJweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjMjEyRDQ1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIFxyXG4gICAgJjpudGgtY2hpbGQoMm4pe1xyXG4gICAgICBncmlkLXJvdzoyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEpvaW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBKb2luVGV4dCA9IHN0eWxlZC5oNWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59O1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kQW5pbWF0aW9uID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJnQW5pbWF0aW9uX19zdmdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDYwMiA2MDJcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGQ9XCJNMjAxLjMzNyA4Ny40MzdDMTkzLjQ3NCA3OS41NzM4IDE4MC43MjUgNzkuNTczOCAxNzIuODYyIDg3LjQzN0w4Ny40MzcgMTcyLjg2MkM3OS41NzM5IDE4MC43MjUgNzkuNTczOSAxOTMuNDc0IDg3LjQzNyAyMDEuMzM3TDQwMC42NjMgNTE0LjU2M0M0MDguNTI2IDUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQyOS4xMzggNTE0LjU2M0w1MTQuNTYzIDQyOS4xMzhDNTIyLjQyNiA0MjEuMjc1IDUyMi40MjYgNDA4LjUyNiA1MTQuNTYzIDQwMC42NjNMMjAxLjMzNyA4Ny40MzdaTTMwLjQ4NjkgMTE1LjkxMkMtOC44Mjg5NyAxNTUuMjI4IC04LjgyODk3IDIxOC45NzIgMzAuNDg2OSAyNTguMjg3TDM0My43MTMgNTcxLjUxM0MzODMuMDI4IDYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDQ4Ni4wODggNTcxLjUxM0w1NzEuNTEzIDQ4Ni4wODhDNjEwLjgyOSA0NDYuNzcyIDYxMC44MjkgMzgzLjAyOCA1NzEuNTEzIDM0My43MTNMMjU4LjI4NyAzMC40ODY5QzIxOC45NzIgLTguODI4OTYgMTU1LjIyOCAtOC44Mjg5NiAxMTUuOTEyIDMwLjQ4NjlMMzAuNDg2OSAxMTUuOTEyWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8wXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTUxNC41NjMgMjAxLjMzN0M1MjIuNDI2IDE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUxNC41NjMgMTcyLjg2Mkw0MjkuMTM4IDg3LjQzN0M0MjEuMjc1IDc5LjU3MzggNDA4LjUyNiA3OS41NzM5IDQwMC42NjMgODcuNDM3TDM1OC4wOTggMTMwLjAwMkwzMDEuMTQ4IDczLjA1MTZMMzQzLjcxMyAzMC40ODY5QzM4My4wMjggLTguODI4OTYgNDQ2Ljc3MiAtOC44Mjg5NiA0ODYuMDg4IDMwLjQ4NjlMNTcxLjUxMyAxMTUuOTEyQzYxMC44MjkgMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNTcxLjUxMyAyNTguMjg3TDM1Ny44MDIgNDcxLjk5OUwzMDAuODUyIDQxNS4wNDlMNTE0LjU2MyAyMDEuMzM3WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MV9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI0My45MDEgNDcxLjk5OUwyMDEuMzM3IDUxNC41NjNDMTkzLjQ3NCA1MjIuNDI2IDE4MC43MjUgNTIyLjQyNiAxNzIuODYyIDUxNC41NjNMODcuNDM3IDQyOS4xMzhDNzkuNTczOSA0MjEuMjc1IDc5LjU3MzkgNDA4LjUyNiA4Ny40MzcgNDAwLjY2M0wzMDEuMTQ4IDE4Ni45NTJMMjQ0LjE5OCAxMzAuMDAyTDMwLjQ4NjkgMzQzLjcxM0MtOC44Mjg5NyAzODMuMDI4IC04LjgyODk3IDQ0Ni43NzIgMzAuNDg2OSA0ODYuMDg4TDExNS45MTIgNTcxLjUxM0MxNTUuMjI4IDYxMC44MjkgMjE4Ljk3MiA2MTAuODI5IDI1OC4yODcgNTcxLjUxM0wzMDAuODUyIDUyOC45NDlMMjQzLjkwMSA0NzEuOTk5WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8yXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIyOTUuMDI3XCJcclxuICAgICAgICBjeT1cIjE5My4xMThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yOTQuNjg1IDE5My40NzRMMjY4LjkzMiAyMTkuMjU4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50M19saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxyXG4gICAgICAgIGN5PVwiMTkzLjExOFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTUuMDI3IC0xOTMuMTE4KVwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIGZpbGw9XCIjNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjk0LjY4NSAxOTMuNDc0TDI2OC45MzIgMjE5LjI1OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiNXNcIlxyXG4gICAgICAgICAgYmVnaW49XCIxXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCI0NzYuNTI1XCJcclxuICAgICAgICBjeT1cIjM2My4zMTNcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSg5MCA0NzYuNTI1IDM2My4zMTMpXCJcclxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSgtNDUgNDc2LjE3MSAzNjIuOTUyKVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDRfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIzODIuMTY0XCJcclxuICAgICAgICBjeT1cIjE1NS4wMjlcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4Mi4xNjQgLTE1NS4wMjkpIHJvdGF0ZSg5MCAzODIuMTY0IDE1NS4wMjkpXCJcclxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzgxLjgxIDE1NC42NjlMMzU2LjA1NyAxMjguODg1XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4MS44MSAtMTU0LjY2OSkgcm90YXRlKC00NSAzODEuODEgMTU0LjY2OSlcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ1X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjMzMy4zMjRcIlxyXG4gICAgICAgIGN5PVwiMzgyLjY5MVwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzMzLjMyNCAtMzgyLjY5MSkgcm90YXRlKC0xODAgMzMzLjMyNCAzODIuNjkxKVwiXHJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzFcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzMzLjY2NyAzODIuMzM1TDM1OS40MiAzNTYuNTUxXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJzY2FsZSgtMSAxKSB0cmFuc2xhdGUoLTMzMy42NjcgLTM4Mi4zMzUpIHJvdGF0ZSg0NSAzMzMuNjY3IDM4Mi4zMzUpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Nl9saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8xXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjE2NS41MjRcIlxyXG4gICAgICAgIGN5PVwiOTMuOTU5NlwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjUyNCAtOTMuOTU5NilcIlxyXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMHNcIlxyXG4gICAgICAgICAgYmVnaW49XCIzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNjUuMTgyIDk0LjMxNTlMMTM5LjQyOSAxMjAuMVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjUuMTgyIC05NC4zMTU5KSByb3RhdGUoNDUgMTY1LjE4MiA5NC4zMTU5KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiM1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXHJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXHJcbiAgICAgICAgZmlsbD1cIiMxM0FEQzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEyc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQ3Ni4xNzEgMzYyLjk1Mkw0NTAuNDE3IDMzNy4xNjhcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MTFfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTJzXCJcclxuICAgICAgICAgIGJlZ2luPVwiNFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQwX3JhZGlhbFwiXHJcbiAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgY3k9XCIwXCJcclxuICAgICAgICAgIHI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDEgMzAxKSByb3RhdGUoOTApIHNjYWxlKDMwMClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MV9yYWRpYWxcIlxyXG4gICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgIGN5PVwiMFwiXHJcbiAgICAgICAgICByPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcclxuICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICBjeT1cIjBcIlxyXG4gICAgICAgICAgcj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4zMzMzMzNcIiBzdG9wQ29sb3I9XCIjRkJGQkZCXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQzX2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjI5NS4wNDNcIlxyXG4gICAgICAgICAgeTE9XCIxOTMuMTE2XCJcclxuICAgICAgICAgIHgyPVwiMjY5Ljk3NVwiXHJcbiAgICAgICAgICB5Mj1cIjIxOC4xNTRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDRfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXHJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXHJcbiAgICAgICAgICB4Mj1cIjQ1MS40NjFcIlxyXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ1X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjM4Mi4xNjhcIlxyXG4gICAgICAgICAgeTE9XCIxNTUuMDI3XCJcclxuICAgICAgICAgIHgyPVwiMzU3LjFcIlxyXG4gICAgICAgICAgeTI9XCIxMjkuOTg5XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ2X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjMzMy4zMDlcIlxyXG4gICAgICAgICAgeTE9XCIzODIuNjkzXCJcclxuICAgICAgICAgIHgyPVwiMzU4LjM3NlwiXHJcbiAgICAgICAgICB5Mj1cIjM1Ny42NTVcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDdfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMTY1LjU0XCJcclxuICAgICAgICAgIHkxPVwiOTMuOTU3OFwiXHJcbiAgICAgICAgICB4Mj1cIjE0MC40NzJcIlxyXG4gICAgICAgICAgeTI9XCIxMTguOTk2XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ4X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjQxNC4zNjdcIlxyXG4gICAgICAgICAgeTE9XCIzMDEuMTU2XCJcclxuICAgICAgICAgIHgyPVwiNDM5LjQzNVwiXHJcbiAgICAgICAgICB5Mj1cIjI3Ni4xMThcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDlfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNTE1Ljk0M1wiXHJcbiAgICAgICAgICB5MT1cIjI4OC4yMzhcIlxyXG4gICAgICAgICAgeDI9XCI1NDEuMzM5XCJcclxuICAgICAgICAgIHkyPVwiMjkxLjQ1NFwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MTBfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMTE3LjAwMVwiXHJcbiAgICAgICAgICB5MT1cIjIzMC42MTlcIlxyXG4gICAgICAgICAgeDI9XCIxMTcuMzZcIlxyXG4gICAgICAgICAgeTI9XCIyNTguMTkzXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQxMV9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCI0NzYuNTI5XCJcclxuICAgICAgICAgIHkxPVwiMzYzLjMxXCJcclxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXHJcbiAgICAgICAgICB5Mj1cIjMzOC4yNzJcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5cclxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyU3R5bGVzJztcclxuaW1wb3J0IHsgQ29tcGFueUNvbnRhaW5lciwgRm9vdGVyV3JhcHBlciwgTGlua0NvbHVtbiwgTGlua0l0ZW0sIExpbmtMaXN0LCBMaW5rVGl0bGUsIFNsb2dhbiwgU29jaWFsQ29udGFpbmVyLCBTb2NpYWxJY29uc0NvbnRhaW5lciB9IGZyb20gJy4vRm9vdGVyU3R5bGVzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgIDxMaW5rTGlzdD5cclxuICAgICAgICA8TGlua0NvbHVtbj5cclxuICAgICAgICAgIDxMaW5rVGl0bGU+Q2FsbDwvTGlua1RpdGxlPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJ0ZWw6MzE0LTM0My0zNDMyXCI+MzE0LTM0My0zNDMyPC9MaW5rSXRlbT5cclxuICAgICAgICA8L0xpbmtDb2x1bW4+XHJcbiAgICAgICAgPExpbmtDb2x1bW4+XHJcbiAgICAgICAgICA8TGlua1RpdGxlPkVtYWlsPC9MaW5rVGl0bGU+XHJcbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIm1haWx0bzpjb250YWN0QGpzbWFzdGVyeS5jb21cIj5cclxuICAgICAgICAgICAgY29udGFjdEBqc21hc3RlcnkuY29tXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvTGlua0NvbHVtbj5cclxuICAgICAgPC9MaW5rTGlzdD5cclxuICAgICAgPFNvY2lhbEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxDb21wYW55Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFNsb2dhbj5Jbm5vdmF0aW5nIG9uZSBwcm9qZWN0IGF0IGEgdGltZTwvU2xvZ2FuPlxyXG4gICAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cclxuICAgICAgICA8U29jaWFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIj5cclxuICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIj5cclxuICAgICAgICAgICAgPEFpRmlsbExpbmtlZGluIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiPlxyXG4gICAgICAgICAgICA8QWlGaWxsSW5zdGFncmFtIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgPC9Tb2NpYWxDb250YWluZXI+XHJcbiAgICAgIDwvU29jaWFsSWNvbnNDb250YWluZXI+XHJcbiAgICA8L0Zvb3RlcldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuXHR3aWR0aDogY2FsYygxMDB2dyAtIDk2cHgpO1xyXG4gIG1heC13aWR0aDogMTA0MHB4O1xyXG4gIHBhZGRpbmc6IDJyZW0gNDhweCA0MHB4O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAgMTZweCA0OHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5hYFxyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cdHRyYW5zaXRpb246IC4zcyBlYXNlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsZWZ0OiAwO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0bGVmdDogNnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDhweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6IDEwNDBweDtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHR3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbjogMCAwIDMycHg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTbG9nYW4gPSBzdHlsZWQucGBcclxuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdG1pbi13aWR0aDogMjgwcHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMwcHg7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcblx0XHRsaW5lLWhlaWdodDogMjJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1pbi13aWR0aDogMTAwcHg7XHJcblx0fVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcbmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4NXB4LCAyMjBweCkpO1xyXG5cdGdhcDogNDBweDtcclxuICBwYWRkaW5nOiA0MHB4IDAgMjhweDtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcclxuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XHJcblx0XHRnYXA6IDE2cHg7XHJcblx0fVxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDMycHggNHB4IDE2cHg7XHJcblx0XHRnYXA6IDVweDtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rQ29sdW1uID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bWF4LXdpZHRoOiAyMjBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuYFxyXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gc3R5bGVkLmg0YFxyXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMjRweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogMTBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cdH1cclxuYFxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IERpQ3NzZGVjayB9IGZyb20gJ3JlYWN0LWljb25zL2RpJztcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgRGl2MSwgRGl2MiwgRGl2MywgTmF2TGluaywgU29jaWFsSWNvbnMgfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPENvbnRhaW5lcj5cclxuICAgIDxEaXYxPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICA8RGlDc3NkZWNrIHNpemU9XCIzcmVtXCIgLz4gPHNwYW4+UG9ydGZvbGlvPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9EaXYxPlxyXG4gICAgPERpdjI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5Qcm9qZWN0czwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI3RlY2hcIj5cclxuICAgICAgICAgIDxOYXZMaW5rPlRlY2hub2xvZ2llczwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0XCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L0RpdjI+XHJcbiAgICA8RGl2Mz5cclxuICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIj5cclxuICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dvb2dsZS5jb21cIj5cclxuICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ29vZ2xlLmNvbVwiPlxyXG4gICAgICAgIDxBaUZpbGxJbnN0YWdyYW0gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgPC9EaXYzPlxyXG4gIDwvQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgeyBJb0lvc0Fycm93RHJvcGRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDYwcHgpO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjVyZW07XHJcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYxID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjMgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBOYXZpZ2F0aW9uIExpbmtzXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkLmFgXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vLyBEcm9wRG93biBDb250YWN0XHJcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG5cclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbiAgb3BhY2l0eTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICcxJyA6ICcuNzUnKX07XHJcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luOiAycHggMCAwIDJweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG4vLyBTb2NpYWwgSWNvbnMgXHJcblxyXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuYWBcclxudHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5jb2xvcjogd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4mOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBcclxuICB9XHJcbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXHJcbiAgPD5cclxuICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XHJcbiAgICAgIDxMZWZ0U2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxyXG4gICAgICAgICAgV2VsY29tZSBUbyA8YnIgLz5cclxuICAgICAgICAgIE15IFBlcnNvbmFsIFBvcnRmb2xpb1xyXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICBUaGUgcHVycG9zZSBvZiBKYXZhU2NyaXB0IE1hc3RlcnkgaXMgdG8gaGVscCBhc3BpcmluZyBhbmQgZXN0YWJsaXNoZWQgZGV2ZWxvcGVycyB0byB0YWtlIHRoZWlyIGRldmVsb3BtZW50IHNraWxscyB0byB0aGUgbmV4dCBsZXZlbCBhbmQgYnVpbGQgYXdlc29tZSBhcHBzLlxyXG4gICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+TGVhcm4gTW9yZTwvQnV0dG9uPlxyXG4gICAgICA8L0xlZnRTZWN0aW9uPlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybzsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBMZWZ0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJsb2dDYXJkLCBDYXJkSW5mbywgRXh0ZXJuYWxMaW5rcywgR3JpZENvbnRhaW5lciwgSGVhZGVyVGhyZWUsIEhyLCBUYWcsIFRhZ0xpc3QsIFRpdGxlQ29udGVudCwgVXRpbGl0eUxpc3QsIEltZyB9IGZyb20gJy4vUHJvamVjdHNTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gbm9wYWRkaW5nIGlkPVwicHJvamVjdHNcIj5cclxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxyXG4gICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XHJcbiAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAge3Byb2plY3RzLm1hcCgocCwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8QmxvZ0NhcmQga2V5PXtpfT5cclxuICAgICAgICAgIDxJbWcgc3JjPXtwLmltYWdlfSAvPlxyXG4gICAgICAgICAgICA8VGl0bGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57cC50aXRsZX08L0hlYWRlclRocmVlPlxyXG4gICAgICAgICAgICAgIDxIciAvPlxyXG4gICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgPENhcmRJbmZvIGNsYXNzTmFtZT1cImNhcmQtaW5mb1wiPntwLmRlc2NyaXB0aW9ufTwvQ2FyZEluZm8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFRpdGxlQ29udGVudD5TdGFjazwvVGl0bGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUYWdMaXN0PlxyXG4gICAgICAgICAgICAgICAge3AudGFncy5tYXAoKHQsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWcga2V5PXtpfT57dH08L1RhZz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1RhZ0xpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VXRpbGl0eUxpc3Q+XHJcbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17cC52aXNpdH0+Q29kZTwvRXh0ZXJuYWxMaW5rcz5cclxuICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rcyBocmVmPXtwLnNvdXJjZX0+U291cmNlPC9FeHRlcm5hbExpbmtzPlxyXG4gICAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxyXG4gICAgICAgICAgPC9CbG9nQ2FyZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICA8L1NlY3Rpb24+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuZGlzcGxheTogZ3JpZDtcclxuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xyXG5wYWRkaW5nOiAzcmVtO1xyXG5wbGFjZS1pdGVtczogY2VudGVyO1xyXG5jb2x1bW4tZ2FwOiAycmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBjb2xvcjogIzljYzllMztcclxuICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRpdGxlID8gJzNyZW0nIDogJzJyZW0nfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgNTBweDtcclxuICBjb2xvcjogI2U0ZTZlNztcclxuICBmb250LXN0eWxlOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzouM3JlbVxyXG4gIFxyXG59XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXHJcbmNvbG9yOiNkNGMwYzA7XHJcbmZvbnQtc2l6ZTogMS42cmVtO1xyXG5wYWRkaW5nOjFyZW0gMS41cmVtO1xyXG5iYWNrZ3JvdW5kOiAjNmIzMDMwO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG50cmFuc2l0aW9uOiAwLjVzO1xyXG4mOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XHJcblxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbnBhZGRpbmc6IDJyZW07XHJcbmBcclxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcclxuY29sb3I6ICNkOGJmYmY7XHJcbmZvbnQtc2l6ZTogMS41cmVtO1xyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRGlGaXJlYmFzZSwgRGlSZWFjdCwgRGlaZW5kIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSB9IGZyb20gJy4vVGVjaG5vbG9naWVzU3R5bGVzJztcclxuXHJcbmNvbnN0IFRlY2hub2xvZ2llcyA9ICgpID0+ICAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJ0ZWNoXCI+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIgZGl2aWRlciAvPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5UZWNobm9sb2dpZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgSSd2ZSB3b3JrZWQgd2l0aCBhIHJhbmdlIGEgdGVjaG5vbG9naWVzIGluIHRoZSB3ZWIgZGV2ZWxvcG1lbnQgd29ybGQuXHJcbiAgICAgIEZyb20gQmFjay1lbmQgVG8gRGVzaWduXHJcbiAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgPExpc3Q+XHJcbiAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgIDxEaVJlYWN0IHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICA8TGlzdFRpdGxlPkZyb250LUVuZDwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIEV4cGVyaWVjZSB3aXRoIDxiciAvPlxyXG4gICAgICAgICAgICBSZWFjdC5qc1xyXG4gICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPERpRmlyZWJhc2Ugc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaXN0VGl0bGU+QmFjay1FbmQ8L0xpc3RUaXRsZT5cclxuICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGggPGJyIC8+XHJcbiAgICAgICAgICAgIE5vZGUgYW5kIERhdGFiYXNlc1xyXG4gICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPERpWmVuZCBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgPC9waWN0dXJlPlxyXG4gICAgICAgIDxMaXN0Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExpc3RUaXRsZT5VSS9VWDwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIEV4cGVyaWVuY2Ugd2l0aCA8YnIgLz5cclxuICAgICAgICAgICAgdG9vbHMgbGlrZSBGaWdtYVxyXG4gICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgIDwvTGlzdD5cclxuICAgIDxTZWN0aW9uRGl2aWRlciBjb2xvckFsdCAvPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlY2hub2xvZ2llcztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwLjI1KSA1My44JSwgcmdiYSg3OSwgMTA4LCAxNzYsIDApIDEwMCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbiAgbWFyZ2luLXRvcDogNDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogNDBweDtcclxuICBtYXJnaW46IDNyZW0gMDtcclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ317XHJcbiAgICBtYXJnaW46IDY0cHggMDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gICAgZ2FwOiAyNHB4XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZC5saWBcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICBtYXgtd2lkdGg6IDIwM3B4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJY29uID0gc3R5bGVkLmltZ2BcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50cyc7XHJcblxyXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XHJcblxyXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xyXG4gICAgcmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aCkpO1xyXG5cclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIHNjcm9sbExlZnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgLyAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICogVGltZUxpbmVEYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcclxuICAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxyXG4gICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgVGhlIHB1cnBvc2Ugb2YgSmF2YVNjcmlwdCBNYXN0ZXJ5IGlzIHRvIGhlbHAgYXNwaXJpbmcgYW5kIGVzdGFibGlzaGVkIGRldmVsb3BlcnMgdG8gdGFrZSB0aGVpciBkZXZlbG9wbWVudCBza2lsbHMgdG8gdGhlIG5leHQgbGV2ZWwgYW5kIGJ1aWxkIGF3ZXNvbWUgYXBwcy5cclxuICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9PlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cclxuICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgIHtgJHtpdGVtLnllYXJ9YH1cclxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj1cIndoaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Atb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UZXh0PntpdGVtLnRleHR9PC9DYXJvdXNlbEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgICA8Q2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xyXG4iLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIHBhZGRpbmc6IDByZW07XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICY6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAvL3JlbW92ZSBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcclxuICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1heC13aWR0aDogMTk2cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgXHJcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTsgXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBUaGlzIGdyYWRpZW50IGlzIGRpZmZlcmVudCBkdWUgdG8gdGhlIHNpemUgb2YgdGhlIFRpdGxlIGNvbnRhaW5lciwgaXQgbXVzdCB0cmFuc2l0aW9uIHNvb25lciB0byBiZSB2aXNpYmxlIG9uIHRoZSB0ZXh0ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXHJcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI4OHB4O1xyXG5cclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xyXG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgfTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG5gXHJcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ09kdW4gcGl6emEnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVXNpbmcgUmVhY3QsTmV4dCBqcyxNb25nb29zZSAmIE1vbmdvREIgaSBsZWFybnQgaG93IHRvIGJ1aWxkIGEgRnVsbCBTdGFjayAgQXBwbGljYXRpb24gLSBmcm9tIHN0YXJ0IHRvIGZpbmlzaC4gVGhpcyBhcHAgaXMgY2FsbGVkIG9kdW4gYW5kIGl0IGlzIGEgZnVuY3Rpb25pbmcgZm9vZCBvcmRlcmluZyBzaXRlICAgXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvZm9vZEgucG5nJyxcclxuICAgIHRhZ3M6IFsnTW9uZ29EQicsJ05leHQganMnLCdSZWFjdCcsJ1BheXBhbCcsXCJDb250ZXggQVBJXCIsXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vbGFvbHV3YWF5YW5ib2xhL29kdW4tcGl6emEnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vb2xhb2x1d2FheWFuYm9sYS9vZHVuLXBpenphJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBc290dW50dW4uYycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJXaGlsZSBidWlsZGluZyB0aGlzIHByb2plY3QgaSBsZWFybnQgaG93IHRvIGludGVncmF0ZSBDb250ZXh0IEFQSSBpbnRvIGEgcmVhY3QgYXBwbGljYXRpb24gYW5kIGxlYXJudCBvbmUgb2YgdGhlIGJlc3Qgd2F5cyB0byBhdXRoZW50aWNhdGUgcm91dGVzIGluIHJlYWN0IHVzaW5nIHRoZSBDb250ZXh0IEFQSVwiLFxyXG4gICAgaW1hZ2U6ICdpbWFnZXMvZWNvbUhvbS5qcGVnJyxcclxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ29udGV4dCBBUEknLCdGaXJlYmFzZSBBdXRoJywnUm91dGUgQXV0aCddLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL29sYW9sdXdhYXlhbmJvbGEvZWNvbW1lcmNlL3RyZWUvU0FWRVBPSU5UL2NsaWVudCcsXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vYXNvdHVudHVuLm5ldGxpZnkuYXBwJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBZG1pbi1kYXNoYm9hcmQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHJlYWN0IGFkbWluIGRhc2hib2FyZCBidWlsZGluZyB0aGlzIGFwcCBoZWxwZWQgbWUgZnVydGhlciBteSBrbm93bGVkZ2Ugb2YgcmVkdXggdG9vbGtpdCBhbmQgc29tZSBkZXNpZ24gY29uY2VwdFwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2FkMS5wbmcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsJ1JlZHV4JyxcIk1VSVwiLCdSZWNoYXJ0cycsJ0ZpZ21hJyxcIlNBU1NcIl0sXHJcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vb2xhb2x1d2FheWFuYm9sYS9yZWFjdC1hZG1pbi1kYXNoJyxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9yZWFjdC1hZG1pbi1meHgubmV0bGlmeS5hcHAvJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdOZXRmbGl4LWNsb25lJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBuZXRmbGl4IGNsb25lIG1hZGUgd2l0aCByZWFjdCBpdCB3YXMgbXkgZmlyc3QgcmVhY3QtcHJvamVjdCBcIixcclxuICAgIGltYWdlOiAnaW1hZ2VzL25ldGZsaXgucG5nJyxcclxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnUmVhY3QtUm91dGVyLURPTScsJ01VSScsJ1NBU1MnXSxcclxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vbGFvbHV3YWF5YW5ib2xhL25ldGZsaXgtY2xvbmUnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL25ldGZsaXhjbG9uZS1vbmUubmV0bGlmeS5hcHAvJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDcnlwdG92ZXJzZScsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJDcnlwdG92ZXJzZSBpcyBhIHdlYmFwcCB0aGF0IHByb3ZpZGVzIGN1cnJlbnQgY3J5cG8gZGF0YSBmb3IgdXNlcnMgdGhlIG1vc3QgY2hhbGxlbmdpbmcgYXNwZWN0IG9mIGJ1aWxkdWluZyB0aGlzIHdlYiBhcHAgd2FzIHRoZSBpbXBsZW1lbnRhdGlvbiBvbiB0aGUgc2VhcmNoIGZ1bmN0aW5hbGl0eSB3aXRoIHRoZSBSRVNUIEFQSSAgXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvY3J5di5wbmcnLFxyXG4gICAgdGFnczogWydSZWFjdCcsJ1JlZHV4IHRvb2xraXQnLFwiQU5URFwiLCdSZWNoYXJ0cycsXCJDb2luZ2Vja28gQVBJXCJdLFxyXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL29sYW9sdXdhYXlhbmJvbGEvY3J5cHRvdmVyc2UnLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2NyeXB0b3ZlcnNlLWZ4Lm5ldGxpZnkuYXBwJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xyXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXHJcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXHJcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnknLCB9LFxyXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXHJcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxyXG5dOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9MYXlvdXRTdHlsZXMnXHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICA8SGVhZGVyLz5cclxuICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPiBcclxuICAgICA8Rm9vdGVyLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5tYXgtd2lkdGg6IDEyODBweDtcclxud2lkdGg6IDEwMCU7XHJcbm1hcmdpbjogYXV0bztcclxuYDtcclxuIiwiaW1wb3J0IEFjb21wbGlzaG1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMnO1xyXG5pbXBvcnQgQmdBbmltYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvL0hlcm8nO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cyc7XHJcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzJztcclxuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxTZWN0aW9uIGdyaWQ+XHJcbiAgICAgICAgPEhlcm8gLz5cclxuICAgICAgICA8QmdBbmltYXRpb24gLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgPFRlY2hub2xvZ2llcyAvPlxyXG4gICAgICA8VGltZWxpbmUgLz5cclxuICAgICAgey8qIDxBY29tcGxpc2htZW50cyAvPiAqL31cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBCdXR0b25CYWNrLCBCdXR0b25Gcm9udCB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8QnV0dG9uRnJvbnQgYWx0PXtwcm9wcy5hbHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uRnJvbnQ+XHJcbiAgPC9CdXR0b25CYWNrPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIiB9O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMucm93ID8gXCJyb3dcIiA6IFwiY29sdW1uXCIgfTtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCIgfSA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHggMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCIgfSA7XHJcblxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc2NXB4JyA6ICc1NnB4J307XHJcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzcycHgnIDogJzU2cHgnfTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTguNzclLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNThweCAwIDE2cHgnIDogJzAnfTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzQwcHggMCAxMnB4JyA6ICcwJ307XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMjhweCcgOiAnMzJweCd9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzMycHgnIDogJzQwcHgnfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzE2cHggMCA4cHgnIDogJzAnfTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMuNnJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkRpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yQWx0ID8gXHJcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOlxyXG4gICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcclxuXHJcbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCIgfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3MnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGYxNjI0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25CYWNrID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcyNjJweCd9O1xyXG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUycHgnIDogJzY0cHgnfTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46ICR7KHsgYWx0LCBmb3JtIH0pID0+IChhbHQgfHwgZm9ybSkgPyAnMCcgOiAnMCAwIDgwcHgnfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmNjIyZSAwJSwgI0IxMzNGRiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKSd9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcxODRweCd9O1xyXG4gICAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNDhweCd9O1xyXG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzY0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzMycHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMjRweCcgOiAnMTZweCd9O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XHJcblxyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcwJyA6ICc4cHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcyNHB4J307XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5gXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==