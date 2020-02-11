import React, { Component } from "react";
import { Motion, spring, presets } from "react-motion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MenuIcon />
    </div>
  );
}

export class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    const style = {
      overflow: "visible",
      cursor: "pointer",
      WebkitTapHighlightColor: "rgba(0,0,0,0)"
    };

    return (
      <div>
        <svg
          viewBox="0 10 10 60"
          height="1.15em"
          onClick={this.handleClick.bind(this)}
          style={style}
          className="menuIcon"
          onMouseOver={() => {
            this.setState({ hover: true });
            if (this.props.onIconHoverChange)
              this.props.onIconHoverChange({ isMouseIn: true });
          }}
          onMouseOut={() => {
            this.setState({ hover: false });
            if (this.props.onIconHoverChange)
              this.props.onIconHoverChange({ isMouseIn: false });
          }}
        >
          <Motion
            style={{
              x: spring(this.state.toggle ? 1 : 0, presets.wobbly),
              y: spring(this.state.toggle ? 0 : 1, presets.wobbly)
            }}
          >
            {({ x, y }) => (
              <g
                id="navicon"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line
                  transform={`translate(${x * 12}, ${x * -7}) rotate(${x *
                    45}, 7, 26)`}
                  x1="7"
                  y1="26"
                  x2="89"
                  y2="26"
                />
                <line
                  transform={`translate(${x * 12}, ${x * 7}) rotate(${x *
                    -45}, 7, 70)`}
                  x1="7"
                  y1="70"
                  x2="89"
                  y2="70"
                />
                <line
                  transform={`translate(${x * -96})`}
                  opacity={y}
                  x1="7"
                  y1="48"
                  x2="89"
                  y2="48"
                />
              </g>
            )}
          </Motion>
        </svg>
      </div>
    );
  }
}
