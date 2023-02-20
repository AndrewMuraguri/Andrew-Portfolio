import './Header.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Outlet, Link } from 'react-router-dom'

export function Header() {
    return (
        <div>
            <Container fluid>
                    <Row>
                        <Col className='ttu'>
                            <Link to='/' className='link'>Home</Link>
                        </Col>
                        <Col className='ttu'>
                            <Link to='/Project' className='link'><p className='text-center'>Project</p></Link>
                        </Col>
                        <Col className='text-end ttu'>
                            <Link to='/Credential' className='link'>Credential</Link>
                        </Col>
                    </Row>
                </Container>
                <Outlet /> 
        </div>
    )
}