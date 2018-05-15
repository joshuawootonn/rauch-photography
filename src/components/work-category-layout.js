import { navigateTo } from "gatsby-link";
import React, { Component } from "react";
import Img from "gatsby-image";
class WorkCategoryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textHover: false
    };
  }
  link = () => {
    navigateTo("/" + this.props.path);
  };
  hoverOffText = () => {
    this.setState({ textHover: false });
  };
  hoverOnText = () => {
    this.setState({ textHover: true });
  };
  getClassesFromProps = () => {
    const {
      leftOrientation,
      centerOrientation,
      rightOrientation,
      version
    } = this.props;
    const classes = [];
    if (leftOrientation === "portrait") {
      classes[0] = `${leftOrientation} version-${version} is-3-tablet is-hidden-touch`;
    } else if (leftOrientation === "landscape") {
      classes[0] = `${leftOrientation} version-${version} is-4-tablet is-hidden-touch`;
    }
    if (centerOrientation === "portrait") {
      classes[1] = `${centerOrientation} version-${version} is-6-mobile is-5-tablet`;
    } else if (centerOrientation === "landscape") {
      classes[1] = `${centerOrientation} version-${version} is-9-mobile is-7-tablet`;
    }
    if (rightOrientation === "portrait") {
      classes[2] = `${rightOrientation} version-${version} is-6-mobile is-4-tablet is-3-desktop`;
    } else if (rightOrientation === "landscape") {
      classes[2] = `${rightOrientation} version-${version} is-7-mobile is-7-tablet is-4-desktop`;
    }
    return classes;
  };

  render() {
    console.log(this.props);
    const classes = this.getClassesFromProps();
    return (
      <div className="work-category">
        <div className="work-category-pictures columns is-gapless ">
          <div className={`column  ${classes[0]}`}>
            <Img
              className={`work-category-left-picture`}
              sizes={this.props.left}
            />
          </div>
          <div className={`column  ${classes[1]}`}>
          
            <Img
              className={`work-category-center-picture`}
              sizes={this.props.center}
              onClick={this.link}
              onMouseEnter={this.hoverOffText}
              onMouseLeave={this.hoverOnText}
            />
          </div>
          <div className={`column  ${classes[2]}`}>
            <Img
              className={`work-category-right-picture`}
              sizes={this.props.right}
            />
          </div>
        </div>
        <div className="work-category-content" onClick={this.link}>
          <h3
            className={`strike ${this.state.textHover ? "" : "strike-hover"}`}
          >
            <span>{this.props.title}</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default WorkCategoryLayout;
