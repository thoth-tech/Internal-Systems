import React from "react"
import { MDBFooter } from "mdb-react-ui-kit"

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a href="https://github.com/thoth-tech" className="text-reset fw-bold">
          Thoth Tech
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
