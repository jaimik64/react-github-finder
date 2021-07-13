import React, {useState, useContext} from 'react'
import Axios from 'axios'

import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

import UserCard from '../git-Components/userCard'
import Repos from '../git-Components/Repos'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import { toast } from 'react-toastify';

function Home() {
    
    const context = useContext(UserContext)
    const [query, setQuery] = useState("")
    const [user, setUser] = useState(null)

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log(data);
        } catch (error) {
            toast("Not able to locate user", { type: "error" })
        }
    };

    // put anypage behind login
    if (!context.user?.uid) {
        return <Redirect to="/signin" />;
    }
    
    return (
        <Container>
            <Row className="mt-4">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Please provide the username"
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={ fetchDetails}>Fetch User Details</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {user ? <UserCard user={ user }/> : null}
                </Col>
                <Col md="7">
                    {user ? <Repos repos_url={user.repos_url} /> : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;