import {Slide as SpectacleSlide} from "../src/spectacle";

/**
 * I'm using this class so that in deck.js I can use small independent slide components
 * Since most of my slides will use a default transition I also provide some default props
 */
export default class Slide extends SpectacleSlide {
    render() {
      this.props.children = this.contents();
      return super.render();
    }
}

Slide.defaultProps = {
  ...SpectacleSlide.defaultProps,
  transition: ["slide", "fade"]
};
