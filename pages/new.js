// pages/new.js
import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Router } from '../routes';

class NewPost extends Component {
    state = {
        title: '',
        postContent: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault(); // prevent default submission of the form to the backend (the browser does that automatically)

        this.setState({ loading: true, errorMessage: '' });
    };

    render() {
        return (
            <Layout>
                <h3>Create a New Post</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Content</label>
                        <Input
                            value={this.state.postContent}
                            onChange={event => this.setState({ postContent: event.target.value })}
                            maxLength="200"
                            label={`${this.state.postContent.length}/200`}
                            labelPosition="right"
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default NewPost;