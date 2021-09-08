import React, { Component } from 'react';
import { Feed, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../route';

class FeedIndex extends Component {
    renderPosts(){
        const posts = [["content", 2, 3, 2018, 7, "address", "address"], ["content", 2, 3, 2018, 7, "address", "address"]];

        const events = posts.map((summary, index) => {
            return {
                date: `${summary[1]}/${summary[2]}/${summary[3]}`,
                image: 'avatar',
                meta: (
                    <Feed.Like>
                        <Icon name='like' />
                        {`${summary[4]} likes`}
                    </Feed.Like>
                ),
                summary: summary[5],
                extraText: summary[0],
                fluid: true
            };
        });
        return <Feed size='large' events={events} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Feed</h3>
                    <Link route="/new">
                        <a>
                            <Button floated="right" content="New Post" icon="add circle" primary />
                        </a>
                    </Link>
                    {this.renderPosts()}
                </div>
            </Layout>
        );
    }
}

export default FeedIndex;