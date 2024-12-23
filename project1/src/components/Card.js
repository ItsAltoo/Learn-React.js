import { Button, Card } from "react-bootstrap";
import "../styles/Card.css";
import Image from "../assets/Images/elaina/1_waifu2x_art_noise3_scale.png";

function MyCard() {
  return (
    <div className="cardBox">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Elaina</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Elaina</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Elaina</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">More Info</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
