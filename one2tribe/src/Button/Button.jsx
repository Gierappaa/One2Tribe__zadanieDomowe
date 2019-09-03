import classNames from 'classnames';
import React from 'react';
import './Button.scss';

export class Button extends React.Component {
  render() {
    const classes = {
      button: true,
      button_has_border: this.props.hasBorder,
      button_uppercase: this.props.uppercase,
    };

    const style = {
      fontSize: this.props.fontSize || '14px',
      background: this.props.background || "none",
      padding: this.props.padding || "2px",
      margin: this.props.margin || "5px",
      width: this.props.width || "250px",
    };


    return (
      <button className={classNames(classes)} type="button" style={style}>
        {this.props.children}
      </button>
    )
  }
}

