import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
function footer() {
  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3' >
            Copyright &copy; Proshop
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default footer
