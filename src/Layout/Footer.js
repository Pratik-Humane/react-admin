import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="justify-content-center justify-content-sm-between">
            <span className="text-muted d-block text-center">
              Copyright © {new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
