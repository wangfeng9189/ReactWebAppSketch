// pages/userProfile.js
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Router, Link } from '../routes';

class UserProfile extends Component {
    static async getInitialProps () {
        const userCats = ['9', '9', '7', '9', '9', '9', '7', '9'];
        return { userCats }
    }

    renderCats(){
        return this.props.userCats.map((summary, index) => {
            return (
                <Card key={index} raised color='teal'>
                    <Image src='/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                </Card>);
        });
    }

    render() {
        return (
            <Layout>
                <h3>Profile</h3>
                <Card.Group itemsPerRow={4}>
                    {this.renderCats()}
                </Card.Group>
            </Layout>
        );
    }
}

export default UserProfile;