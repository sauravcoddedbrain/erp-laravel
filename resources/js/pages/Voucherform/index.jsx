import React from "react";
import "./style.scss";
import Layout from "../../partials/Layout";
import { Form, Col, Row, Dropdown, Button, InputGroup } from "react-bootstrap";
import { Input } from "postcss";
import DatePicker from "react-flatpickr";
import { MdAddBox, MdCalendarMonth } from "react-icons/md";



export default function Voucherform() {

    const [date, setDate] = React.useState(new Date());

    return (
        <Layout title=" R.M Receiving Form" hideBanner>
            <Form>
                <Row>
                    <Col xs={6} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>RM Voucher Number</Form.Label>
                            <Form.Control type="email" placeholder="Enter your number" className="rounded-2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Invoice Number</Form.Label>
                            <Form.Control type="password" placeholder="Enter your number" className="rounded-2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>

                            <InputGroup>
                                <DatePicker id="flatpickr-date" className="form-control m-0 border-end-0 rounded-2" value={date} onChange={([date]) => { setDate(date) }} />
                                <label htmlFor="flatpickr-date" className="input-group-text border-gray-600 rounded-1 border-start-0 bg-body"><MdCalendarMonth /> </label>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>EMail</Form.Label>
                            <Form.Control type="password" placeholder="Enter your Mail" className="rounded-2" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>










                    </Col>


                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Supplier</Form.Label>
                            <Form.Control type="email" placeholder="Enter name " className="rounded-2" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your address " className="rounded-2" />
                        </Form.Group>

                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your City " className="rounded-2" />
                                </Form.Group>
                            </Col>

                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your State " className="rounded-2" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your Number " className="rounded-2" />
                                </Form.Group>
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <Form.Select>
                            <option value={false}> Select to add Item</option>

                        </Form.Select>

                    </Col>
                </Row>

                <Row className="my-4">
                    <table className="table  table-bordered  table-responsive">
                        <thead>

                            <tr className="text-center">

                                <th scope="col">Sr. No.</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Item Part</th>
                                <th scope="col">Item Size</th>
                                <th scope="col">Item Grade</th>
                                <th scope="col">Total GWT</th>
                                <th scope="col">Total PKT.</th>
                                <th scope="col">PKT Receiver</th>


                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr className="text-center">

                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                        </tbody>
                    </table>

                </Row>


                <Row className="my-4">
                    <table className="table  table-bordered  table-responsive">
                        <thead>

                            <tr className="text-center">

                                <th scope="col">Sr. No.</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Item Part</th>
                                <th scope="col">Item Size</th>
                                <th scope="col">Item Grade</th>
                                <th scope="col">Total GWT</th>
                                <th scope="col">Total PKT.</th>
                                <th scope="col">PKT Receiver</th>


                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr className="text-center">

                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>

                            </tr>
                        </tbody>
                    </table>

                </Row>
            </Form>

        </Layout>
    )
}
