import React, { Component } from 'react';
import classnames from 'classnames';
import FbButton from './FbButton'


class NewsletterForm extends Component {
  state = {
    email: '',
  }

  render() {
    const { className, submit = 'Submit' } = this.props;
    const classNames = classnames(
      'newsletter-form field field-grouped is-revealing',
      className
    )
    const responseFacebook = (response) => {
      console.log(response);
    }

    const componentClicked = () => {
      console.log( "Clicked!" )
    }

    return (
      <form className={classNames}>
        <div className="control">
           <FbButton />
        </div>
        <FbButton />
      </form>
    )
  }
}

export default NewsletterForm;
