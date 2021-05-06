import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Card,Button} from 'react-bootstrap';
/**
* @author
* @function MyProfile
**/

const MyProfile = (props) => {

  const auth = useSelector(state=> state.auth);
 
  return (
  //   <div className="Navbar__menuItem">
  //   <div>{auth.user.firstName}</div>
  //   <div>{auth.user.lastName}</div>
  //   <div>{auth.user.email}</div>
  //  </div>
  <Card className="text-center">
  <Card.Header>User Profile</Card.Header>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <span> 
    FirstName : : 
    {auth.user.firstName}
    </span>
    </Card.Text>
    <Card.Text>
    {auth.user.lastName}
    </Card.Text>
    <Button variant="primary">Update Profile</Button>
  </Card.Body>
</Card>
   
  )
}

export default MyProfile