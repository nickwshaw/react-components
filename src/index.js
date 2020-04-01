import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Klara"
                    timeAgo="Yesterday 1pm"
                    content="word up!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="James" 
                    timeAgo="Yesterday 5pm"
                    content="I told ya!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Nick" timeAgo="Today 3pm" content="Soooo last year" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));