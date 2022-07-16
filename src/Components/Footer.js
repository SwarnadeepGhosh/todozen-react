import React from 'react'

export const Footer = () => {

  // let footerStyle = {
  //   position: "absolute",
  //   width: "100%",
  //   bottom: "0",
  // };

  return (
    // <footer classNameNameName='footer bg-dark text-light py-2' style={footerStyle}>

    <footer className="footer text-light">
      <div className="footer-container align-middle text-center vertical-center">
        <i>Made with <i className="fa fa-heart"></i> by <a className="text-light" href="https://swarnadeep.vercel.app/" target="_blank" rel="noopener noreferrer">Swarnadeep</a></i>

        <a className="text-light" href="https://www.instagram.com/its_swarna_97/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram float-right mx-2 fa-lg social"></i></a>
        <a className="text-light" href="https://www.facebook.com/swarnadeep.ghosh.10" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square float-right mx-2 fa-lg social"></i></a>
        <a className="text-light" href="https://github.com/SwarnadeepGhosh" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square float-right mx-2 fa-lg social"></i></a>
        <a className="text-light" href="https://www.linkedin.com/in/swarnadeepghosh/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square float-right mx-2 fa-lg social"></i></a>

      </div>
    </footer>
  )
}
