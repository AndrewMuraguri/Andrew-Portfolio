import './Homepage.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Homepage() {
    return (
        <div class='story'>
            <Container fluid className=''>       
            <Row className=''>
                <Col sm='6' className='gx-5 gy-5 '>
                    <h1 id='bio'>Frontend Web-Developer</h1>
                    <h2 id='bio2'>Team-oriented Individual always seeking to expand my current skills 
                                    in a swift manner and adaptable to autonomous tasks. </h2>
                    <ul class="wrapper">
                        <li class="icon facebook">
                            <span class="tooltip">JavaScript</span>
                            <span><img src={require('../media/icons8-javascript-48.png')} alt='java'/></span>
                        </li>
                        <li class="icon twitter">
                            <span class="tooltip">React.js</span>
                            <span><img src={require('../media/icons8-react-native-48.png')} alt='react'/></span>
                        </li>
                        <li class="icon instagram">
                            <span class="tooltip">Node.js</span>
                            <span><img src={require('../media/icons8-node-js-48.png')} alt='node'/></span>
                        </li>
                    </ul>
                </Col>
                <Col sm='6' className='gx-5 gy-5'>
                    <video className='avatar' autoPlay loop muted>
                        <source src={require("../media/Avatar.mp4")} type="video/mp4" alt='ava' />
                    </video>
                </Col>
            </Row>
            
            </Container>               
        </div>
)
}
