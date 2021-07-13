import React from 'react'
import {Card,CardBody } from 'reactstrap';
import Loc from '../img/location.png'
import Twitter from '../img/Twitter.png'

export default function UserCard({ user }) {
    const twitter_url = "https://twitter.com/" + user.twitter_username;
    const profile_url = "https://github.com/" + user.login;
    return (
        <Card fluid className="text-center mt-3 mb-5" >
            <img src={user.avatar_url} className="img-thumbnail rounded-circle" height="150px"  alt="..."/>
            <CardBody>
                <div className="text-primary" style={{fontSize: "24px"}}>{user.name}</div>
                <div className="text-primary tle" style={{ fontSize: "18px" }}><a href={profile_url} target="_blank">{ user.login}</a></div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-primary">Available for hire: {user.hireable ? 'YES' : 'NOPE'}</div>
                <div className="text-primary">Followers: {user.followers}</div>
                <div className="text-primary">Following: {user.following}</div>
                {user.location ? (
                    <div className="text-primary"><img src={Loc} height="22px" width="22px"/> {user.location}</div>
                ) : null}
                {user.twitter_username ? (
                    <div className="text-primary tle"><img src={Twitter} height="20px" width="22px" />  <a href={twitter_url } target="_blank">{user.twitter_username}</a></div>
                ) : null}
            </CardBody>
        </Card>
    )
}
