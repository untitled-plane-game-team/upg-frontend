import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Flight data courtesy of Skyscanner</h5>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Copenhacks 2018 project</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Ashley Davies-Lyons</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Maurice Yap</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Mihajlo Kocic</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Marija Stepanovic</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2018 Copyright Untitled Plane Game Team
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
