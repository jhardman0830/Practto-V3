import React, { Component } from "react";
import styled from "styled-components";
import theme from "../theme/theme";
import { toRem } from "../utils/utils";

import ReactSwipe from "react-swipe";
import ArrowRight from "react-icons/lib/fa/angle-right";
import ArrowLeft from "react-icons/lib/fa/angle-left";
import Avatar from "../components/Avatar";
import Divider from "../components/Divider";
import Card from "../components/Card";

const SwipeWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Review = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
`;

const ButtonLeft = styled.button`
  background: none;
  height: 100%;
  border: none;
  outline: none;
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0px;
  z-index: 2;
`;

const ButtonRight = styled.button`
  background: none;
  height: 100%;
  border: none;
  outline: none;
  position: absolute;
  right: 0;
  top: 0px;
  bottom: 0px;
  z-index: 2;
`;

const ReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.p`
  margin: 0;
  font-size: ${toRem(12)};
  font-weight: 400;
  color: ${theme.textBlack};
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  font-size: ${toRem(12)};
  font-weight: lighter;
  color: ${theme.textBlack};
`;

const CardWithBar = styled(Card)`
  max-width: ${toRem(300)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 60px;
    left: 0;
    right: 0;
    background: ${theme.darkRed};
    z-index: 0;
    border-top-left-radius: ${toRem(5)};
    border-top-right-radius: ${toRem(5)};
  }
`;

export default class Testimonial extends Component {
  state = {
    index: 0,
    items: this.props.items
  };

  handleLeft = () => {
    this.slideshow.prev();
  };

  handleRight = () => {
    this.slideshow.next();
  };

  render() {
    const { items = [] } = this.state;

    return (
      <SwipeWrapper>
        {items.length > 1 && (
          <ButtonLeft onClick={this.handleLeft}>
            <ArrowLeft size={28} color={theme.textBlack} />
          </ButtonLeft>
        )}
        {items.length > 1 && (
          <ButtonRight onClick={this.handleRight}>
            <ArrowRight size={28} color={theme.textBlack} />
          </ButtonRight>
        )}

        <ReactSwipe
          ref={node => (this.slideshow = node)}
          swipeOptions={{ continuous: true }}
        >
          {items &&
            items.map((item, i) => (
              <ReviewWrapper key={i}>
                <Review>
                  <CardWithBar background={theme.aliceBlue}>
                    {item.image.url && (
                      <div>
                        <Flex>
                          <Avatar src={item.image.url} width={80} />
                        </Flex>
                        <Divider
                          color={theme.darkRed}
                          paddingTop={8}
                          paddingBottom={16}
                        />
                      </div>
                    )}
                    <Description>{`"${item.content}"`}</Description>
                    <Name>{item.name}</Name>
                  </CardWithBar>
                </Review>
              </ReviewWrapper>
            ))}
        </ReactSwipe>
      </SwipeWrapper>
    );
  }

  static propTypes = {};
}
