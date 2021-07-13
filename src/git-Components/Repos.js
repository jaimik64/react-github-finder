import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Repos({repos_url}) {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const fetchRepos = async () => {
            const { data } = await Axios.get(repos_url);
            setRepos(data);
            console.log(data);
        }
        fetchRepos();
    },[repos_url]);


    return (
        <ListGroup className="mb-5">
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary title"><a href={repo.html_url} target="_blank">{repo.name}</a></div>
                    {repo.language ? (
                        <div className="text-primary mt-2 mb-2">
                            <span className="lang">
                                {repo.language}
                            </span>
                        </div>
                    
                    ) :null}
                    {repo.description ? (
                        <ul>
                            <li><div className="text-primary desc">{repo.description}</div></li>
                        </ul>
                    ): null}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
