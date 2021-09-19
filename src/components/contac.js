import { Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

function Contact() {
    let location = useLocation()
    return (

        <div>
            <h1 className="head">Contact Page</h1>

            <Card style={{ width: '18rem', height: '300px', display: 'inline-block', marginTop: '40px', marginLeft: "100px" }}>
                <Card.Body>
                    <Card.Title id="facebook">Facebook</Card.Title>
                    {/* <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle> */}
                    <Card.Text className="cardtext">
                        Contact Us On Facebook . To connect on Facebook click the button below.
                    </Card.Text>
                    <Button className="btn" primary outline><a className="btntext" target="_blank" href="https://www.facebook.com/">Facebook</a></Button>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '300px', display: 'inline-block', marginTop: '40px', marginLeft: "100px" }}>
                <Card.Body>
                    <Card.Title id="instagram">Instagram</Card.Title>
                    {/* <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle> */}
                    <Card.Text className="cardtext">
                        Contact Us On Instagram . To connect on Instagram click the button below.
                    </Card.Text>
                    <Button className="instagrambtn" primary outline><a className="btntext" target="_blank" href="https://www.instagram.com/">Instagram</a></Button>

                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', height: '300px', display: 'inline-block', marginTop: '40px', marginLeft: "100px" }}>
                <Card.Body>
                    <Card.Title id="twitter">Twitter</Card.Title>
                    {/* <Card.Subtitle mb="2" text="muted">Card subtitle</Card.Subtitle> */}
                    <Card.Text className="cardtext">
                        Contact Us On Twitter . To connect on Twitter click the button below.
                    </Card.Text>
                    <Button className="twitterbtn" primary outline><a className="btntext" target="_blank" href="https://www.twitter.com/">Twitter</a></Button>

                </Card.Body>
            </Card>

           
        </div>
    )
}

export default Contact;