import { Container, Image, Tabs, Tab, Badge, Button, Row, Col, Card } from 'react-bootstrap'
import PostTab from './PostTab'
import LessonTab from './LessonTab'
import BookedLessonTab from './BookedLessonTab'

const Profile = () => {

  return (
    <Container>
      <div className="profile-heading">
        <Row>
          <Col xs="3" className="profile-col1">
            <Image
              className="profile-pic"
              // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAALVBMVEXMzMzy8vLLy8vd3d319fXU1NTg4ODX19fQ0NDv7+/a2trl5eXr6+vo6OjIyMgenHbNAAADSklEQVR4nO2Y6darKgxAJQIyKO//uCdhUvt10Jq2d62b/avWVrdJgOAw/gcYBEEQBEEQBEEQBEEQBEH4GpDSjwVgcGFZ3A8F0hCi11rp+JtYQHKTRQGtCP8DAcyBXXwVyJgvG7QcKIV50Cpa+jTCFwVciKpGQGu/jC4BGDyev1IUAOCMnWv0UWC2xkF5fo/ffD4SZDAupQwpBz5OboB2X4j47WeLggRaEbQcAGwfHAKesx80GGgg0uNXAWtKBGDr4TA682fuj3ehImghULOdXL/zFOPUf5ooR/yTJk6GWARVQFMRhF0OFvxOx/5rKoqJtTQhwXYgKhTI0e/gTYucTfVEwKPYzl4XwCIw0a8zoYphMn+o53w7nvBgrp+vpgXnHdty0NF3+HNuc6DMpWCAXXPwPtpekYChFcFi3zXRVyUGyNeh2ZhWAxX+1sJL/GWJtOSKx+onCfxwnklfjgROv3lNJomj18IGcx2WHBI09JYqoQ5eK8QYOCXymuzdKYmZSnFpzQSHRJl+T0jAonejkkUilGscj0Qdxq3PZUmHU7lROyzhmoRjlABs3/SZmqgSM2M6aOKmNfm4hC010VoLHgm8CK3JNxJP1mcq5fWnLBJ55va36XDj44URex9s+/vfWSQSFYUbdhIJW5hne5tNnJgigUnWIe0kaAisrdzzv/NI5Jl7J1EmJD27nvhPS5SZe5uOsqyrtZOFMD70YJLIz222Em3nR1enxW3Uen5UqFwSIy3nrkvkQdssqDAgd8H2/qjlSge1EvNGYtt5a29S7fa9u7cN55LIW+yeDgrMvoXs3KsMLom8sRlVi8Q2EDc97Tpe+CVoi71UiZtA3HbW421K2NLRlmfqK9xjhVoZ+xuySbQxafue8xlh/6aCTaIszzkdrxSov9zWJ5/E1CTyZvs1gbXlr7iWDrCHJHRclxU2iTR3iYPbUd9ekDBKlHF5QoIm9D7J80gM5mwkaM7IwWCUcG2NMo/ny7/QZpBRYliKBPkch/54Zif9glIU77waSIEvEmXmHo2ZzmGm6y9JOqWJuPfG7BWKUeL1mvFkoHBJTG+FoQaD69UumHCyHDaFwfd6+Y2XZg02B0EQBEEQBEEQBEEQBEH4H/EPRtciR2QRHuYAAAAASUVORK5CYII="
              src="https://static01.nyt.com/images/2021/06/05/opinion/black-women-surfers-1622836853424/black-women-surfers-1622836853424-mediumSquareAt3X-v2.jpg"
              roundedCircle="true"
            />
          </Col>

          <Col xs="3" className="profile-col2">
            <h2>@nycsurflover</h2>
            <hr />
            <Badge className="badge" bg="primary">
              Surfer
            </Badge>
          </Col>

          <Col xs="2" className="profile-col3">
            <h4>Followers: 529</h4>
            <hr />
            <Button>Follow</Button>
          </Col>

          <Col xs="2" className="profile-col4">
            <div className="prof-col4">
              <h4>Following: 415</h4>
              <hr />
              <Button>Message</Button>
            </div>
          </Col>
        </Row>
        <Row xs="2">
          <h5 className="bio">
            {/* NYC Living. Programmer by day, surfer by night. */}
            Programmer and surfer living in NYC.
          </h5>
        </Row>
      </div>
      <Tabs>
        <Tab eventKey="posts" title="Posts">
          <PostTab />
        </Tab>
        {/* <Tab eventKey="lessons" title="Lessons">
          <LessonTab />
        </Tab> */}
        <Tab eventKey="booked-lessons" title="Booked Lessons">
          <BookedLessonTab />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Profile