import { Card, Col, Container, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

const AllTheBooks = () => {
  return (
    <Container fluid   xs={6}>
      <Col >
        <Row className="g-2">
          {fantasy.map((book) => {
            return (
              <Col xs={12} md={4} key={book.asin}>
                <Card className="book-cover d-flex flex-column">
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Col>
    </Container>
  )
}

export default AllTheBooks
