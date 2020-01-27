import React, { Component } from 'react';

import CardMovie from '../CardMovie';
import SliderButton from '../SliderButton';

import img from '../../assets/img.jpg';
import img2 from '../../assets/jurassic-park.jpg';

import * as S from './styles';

const length = 10;

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 1,
      left: 0,
      hasPrev: false,
      hasNext: true,
    };
  }

  handlePrev = () => {
    const { slidesToShow } = this.props;
    const width = document.querySelector('.slider').offsetWidth;

    this.setState(
      prevState => ({
        activeIndex: --prevState.activeIndex,
        left: prevState.left + (width * slidesToShow) / slidesToShow,
      }),
      function() {
        this.handleControls();
      }
    );
  };

  handleNext = () => {
    const { slidesToShow } = this.props;
    const width = document.querySelector('.slider').offsetWidth;

    this.setState(
      prevState => ({
        activeIndex: ++prevState.activeIndex,
        left: prevState.left - (width * slidesToShow) / slidesToShow,
      }),
      function() {
        this.handleControls();
      }
    );
  };

  handleControls = () => {
    const { slidesToShow } = this.props;
    const { activeIndex } = this.state;

    let hasPrev = false;
    let hasNext = false;

    if (activeIndex < length / slidesToShow) {
      hasNext = true;
    }
    if (activeIndex > 1) {
      hasPrev = true;
    }
    setTimeout(() => {
      this.setState({
        hasPrev,
        hasNext,
      });
    }, 600);
  };

  componentDidMount() {
    this.handleControls();
  }

  render() {
    const { id, className, title, slidesToShow } = this.props;
    const { left, hasPrev, hasNext } = this.state;

    let rows = [];
    for (let i = 0; i < length; i++) {
      rows.push(
        <div key={i} className={`item card-${i}`}>
          <CardMovie img={img} />
        </div>
      );
    }

    return (
      <S.Container>
        <h1 className="title">{title}</h1>

        <S.SliderContainer>
          <S.Slider
            id={id}
            className={className}
            style={{ left }}
            slidesToShow={slidesToShow}
            totalSlides={length}
          >
            {rows}
          </S.Slider>

          {hasPrev && <SliderButton type="prev" onClick={this.handlePrev} />}
          {hasNext && <SliderButton type="next" onClick={this.handleNext} />}
        </S.SliderContainer>
      </S.Container>
    );
  }
}

Slider.defaultProps = {
  slidesToShow: 5,
};
