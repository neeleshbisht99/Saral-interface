import React, { useState } from 'react';
import './index.css';
import IconText from '@mapbox/mr-ui/icon-text';
import ControlText from '@mapbox/mr-ui/control-text';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import Button from '@mapbox/mr-ui/button';
import Icon from '@mapbox/mr-ui/icon';
import { connect } from 'react-redux';
import { configureSendMessageFormSubmit } from '../../../../store/actions';

function CardBack(props) {
  const { configureSendMessageFormSubmit } = props;
  const [reachFormValues, setReachFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (value, id) => {
    setReachFormValues({ ...reachFormValues, [id]: value });
  };

  function handleReachFormSubmit() {
    configureSendMessageFormSubmit(reachFormValues);
    setReachFormValues({ name: '', email: '', message: '' });
  }

  return (
    <React.Fragment>
      <div className="cardBackReachBanner">
        <div className="cardContainer">
          <div className="cardHead">Let's get in touch !</div>
          <div className="cardBody">
            <div className="nameCard">
              <div>
                <ControlText
                  id="name"
                  onChange={handleChange}
                  label="Name"
                  value={reachFormValues.name}
                  name="LocationName"
                  // ref={register({ required: true, maxLength: 50 })}
                />
                {/* {errors.Name && <p>This field is required</p>} */}
              </div>
              <div>
                <ControlText
                  id="email"
                  onChange={handleChange}
                  label="E-Mail"
                  value={reachFormValues.email}
                  name="Email"
                  // ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                />
                {/* {errors.Email && <p>This field is required</p>} */}
              </div>
            </div>
            <div className="messageCard">
              <ControlTextarea
                id="message"
                label="Message"
                onChange={handleChange}
                value={reachFormValues.message}
                name="Message"
                // ref={register({ required: true, maxLength: 256 })}
              />
            </div>
          </div>
          <div className="cardSubmit">
            <Button onClick={handleReachFormSubmit} outline={true}>
              <IconText iconAfter="arrow-right">Send Message</IconText>
            </Button>
            <div className="cardLinks">
              <span className="inline-block color-blue">
                <a href="https://www.linkedin.com/in/neelesh-bisht-398061b4/">
                  {' '}
                  <Icon name="linkedin" inline={false} size={48} />
                </a>
              </span>

              <span className="inline-block color-red">
                <a href="mailto:neeleshbisht99@gmail.com">
                  {' '}
                  <Icon name="mail" inline={false} size={48} />
                </a>
              </span>
              <span className="inline-block color-blue">
                <a href="https://twitter.com/neeleshbisht99">
                  {' '}
                  <Icon name="twitter" inline={false} size={48} />
                </a>
              </span>
              <span className="inline-block color-black">
                <a href="https://github.com/neeleshbisht99">
                  {' '}
                  <Icon name="github" inline={false} size={48} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect(store => ({}), { configureSendMessageFormSubmit })(
  CardBack,
);
