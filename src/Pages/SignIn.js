import React, { useContext, useState } from 'react'
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Col,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input
} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import firebase from 'firebase/app'
import { UserContext } from '../context/userContext'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function SignIn() {
    
    const context = useContext(UserContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSignup = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(res => {
                console.log(res)
                context.setUser({email: res.user.email, uid: res.user.uid})
            })
            .catch(error => {
                console.log(error)
                toast(error.message, {
                    type:"error"
                })
            })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        handleSignup()
    }
    
   if (context.user?.uid) {
	   return (
			<div>
				<Redirect path="/" />
		   </div>
	   )
   } else {
    return (
		<Container className='text-center'>
			<Row>
				<Col lg={6} className='offset-lg-3 mt-5'>
					<Card>
						<Form onSubmit={handleFormSubmit}>
							<CardHeader className=''>Sign In here</CardHeader>
							<CardBody>
								<FormGroup row>
									<Label for='email' sm={3}>
										Email
									</Label>
									<Col sm={9}>
										<Input
											type='email'
											name='email'
											id='email'
											placeholder='provide your email'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for='password' sm={3}>
										Password
									</Label>
									<Col sm={9}>
										<Input
											type='password'
											name='password'
											id='password'
											placeholder='your password here'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Col>
								</FormGroup>
							</CardBody>
							<CardFooter>
								<Button type='submit' block color='primary'>
									Sign In
								</Button>
							</CardFooter>
						</Form>
					</Card>
				</Col>
			</Row>
		</Container>
	);
   }
}

