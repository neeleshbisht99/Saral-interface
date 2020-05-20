import React from 'react';
import './index.css';
import IconText from '@mapbox/mr-ui/icon-text';
import ControlText from '@mapbox/mr-ui/control-text';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import Button from '@mapbox/mr-ui/button';
import Icon from '@mapbox/mr-ui/icon';
function CardBack() {
  const handleChange = (value, id) => {};

  return (
    <React.Fragment>
      <div className="cardBackReachBanner">
        <div className="cardContainer">
          <div className="cardHead">Let's get in touch !</div>
          <div className="cardBody">
            <div className="nameCard">
              <div>
                <ControlText id="basic" onChange={handleChange} label="Name" />
              </div>
              <div>
                <ControlText
                  id="basic"
                  onChange={handleChange}
                  label="E-Mail"
                />
              </div>
            </div>
            <div className="messageCard">
              <ControlTextarea
                id="story"
                label="Message"
                onChange={handleChange}
                // value={this.state.value}
              />
            </div>
          </div>
          <div className="cardSubmit">
            <Button onClick={() => {}} outline={true}>
              <IconText iconAfter="arrow-right">Send Message</IconText>
            </Button>
            <div className="cardLinks">
              <span className="inline-block color-blue">
                <Icon name="linkedin" inline={false} size={48} />
              </span>

              <span className="inline-block color-red">
                <Icon name="mail" inline={false} size={48} />
              </span>
              <span className="inline-block color-blue">
                <Icon name="twitter" inline={false} size={48} />
              </span>
              <span className="inline-block color-black">
                <Icon name="github" inline={false} size={48} />
              </span>
            </div>
          </div>
          {/* <div className="cardLinks">
            <span className="inline-block color-blue">
              <Icon name="linkedin" inline={false} size={48} />
            </span>

            <span className="inline-block color-red">
              <Icon name="mail" inline={false} size={48} />
            </span>
            <span className="inline-block color-blue">
              <Icon name="twitter" inline={false} size={48} />
            </span>
            <span className="inline-block color-black">
              <Icon name="github" inline={false} size={48} />
            </span>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}
export default CardBack;
