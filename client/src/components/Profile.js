import { Container, Image, Tabs, Tab, Badge, Button, TabContainer } from 'react-bootstrap'
import PostsTab from './PostsTab'

const Profile = () => {

  return (
    <Container>
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAMAAABmmnOVAAAALVBMVEXMzMzy8vLLy8vd3d319fXU1NTg4ODX19fQ0NDv7+/a2trl5eXr6+vo6OjIyMgenHbNAAADSklEQVR4nO2Y6darKgxAJQIyKO//uCdhUvt10Jq2d62b/avWVrdJgOAw/gcYBEEQBEEQBEEQBEEQBEH4GpDSjwVgcGFZ3A8F0hCi11rp+JtYQHKTRQGtCP8DAcyBXXwVyJgvG7QcKIV50Cpa+jTCFwVciKpGQGu/jC4BGDyev1IUAOCMnWv0UWC2xkF5fo/ffD4SZDAupQwpBz5OboB2X4j47WeLggRaEbQcAGwfHAKesx80GGgg0uNXAWtKBGDr4TA682fuj3ehImghULOdXL/zFOPUf5ooR/yTJk6GWARVQFMRhF0OFvxOx/5rKoqJtTQhwXYgKhTI0e/gTYucTfVEwKPYzl4XwCIw0a8zoYphMn+o53w7nvBgrp+vpgXnHdty0NF3+HNuc6DMpWCAXXPwPtpekYChFcFi3zXRVyUGyNeh2ZhWAxX+1sJL/GWJtOSKx+onCfxwnklfjgROv3lNJomj18IGcx2WHBI09JYqoQ5eK8QYOCXymuzdKYmZSnFpzQSHRJl+T0jAonejkkUilGscj0Qdxq3PZUmHU7lROyzhmoRjlABs3/SZmqgSM2M6aOKmNfm4hC010VoLHgm8CK3JNxJP1mcq5fWnLBJ55va36XDj44URex9s+/vfWSQSFYUbdhIJW5hne5tNnJgigUnWIe0kaAisrdzzv/NI5Jl7J1EmJD27nvhPS5SZe5uOsqyrtZOFMD70YJLIz222Em3nR1enxW3Uen5UqFwSIy3nrkvkQdssqDAgd8H2/qjlSge1EvNGYtt5a29S7fa9u7cN55LIW+yeDgrMvoXs3KsMLom8sRlVi8Q2EDc97Tpe+CVoi71UiZtA3HbW421K2NLRlmfqK9xjhVoZ+xuySbQxafue8xlh/6aCTaIszzkdrxSov9zWJ5/E1CTyZvs1gbXlr7iWDrCHJHRclxU2iTR3iYPbUd9ekDBKlHF5QoIm9D7J80gM5mwkaM7IwWCUcG2NMo/ny7/QZpBRYliKBPkch/54Zif9glIU77waSIEvEmXmHo2ZzmGm6y9JOqWJuPfG7BWKUeL1mvFkoHBJTG+FoQaD69UumHCyHDaFwfd6+Y2XZg02B0EQBEEQBEEQBEEQBEH4H/EPRtciR2QRHuYAAAAASUVORK5CYII="
        roundedCircle="true"
      />
      <Badge bg="primary">Coach</Badge>
      <h4>Followers</h4>
      <h4>Following</h4>
      <Button>Follow</Button>
      <Button>Message</Button>
      <Tabs>
        <Tab eventKey="posts" title="Posts">
          <PostsTab />
        </Tab>
        <Tab eventKey="lessons" title="Lessons"></Tab>
      </Tabs>
    </Container>
  );
}

export default Profile