import React, {Component} from 'react';
import CounterButton from '../components/CounterButton';
import GithubButton from '../components/GithubButton';
import {requireServerCss, requireServerImage} from '../util';

const styles = __CLIENT__ ? require('./Home.scss') : requireServerCss(require.resolve('./Home.scss'));

// require the logo image both from client and server
let logoImage = '';
if (__CLIENT__) {
  logoImage = require('./logo.png');
} else {
  logoImage = requireServerImage('./logo.png');
}

export default class Home extends Component {
  render() {
    alert('Hi');
    return (
      <div>
        <div className={styles.masthead}>
        <div className="container" style={{backgroundColor: '#FF00FF'}}>
          <div className={styles.counterContainer}>
            <CounterButton/>
          </div>

          <p>This starter boilerplate app uses the following technologies:</p>

        </div>
      </div>
      </div>
    );
  }
}
