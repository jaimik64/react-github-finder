import React from 'react'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Footer() {
    return (
        <Container fluid
            tag="footer"
            className="text-center bg-info text-white text-uppercase fixed-bottom p-3">
            Github search app with firebase
        </Container>

    )
}
