import React from "react";
import {Col, Row} from "react-bootstrap";


export default function Projects(){
    return(
        <Row className={"justify-content-center"} style={{marginTop:"25px", lineHeight:"40px"}}>
            <Col className={"col-12"}>
                <h3>Here is where I will list the projects I am working on</h3>
            </Col>
            <Col className={"col-4"}>
                <h3>Stay tuned I'm cooking!</h3>
            </Col>
        </Row>
    )
}