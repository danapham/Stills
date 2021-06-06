import React from 'react';
import categoriesData from '../helpers/data/categoriesData';

export default class VoteP1 extends React.Component {
    state = {
        categories: []
    }

    componentDidMount() {
        categoriesData.getAllCategories().then((categories) => this.setState({
            categories
        }))
    }

    handleClick = (e) => {
        const selectedCategoryId = e.target.id;
        this.props.history.push('/vote-p2', selectedCategoryId);
    }

    render() {
        return(
            <div className="vote-page-1">
            <h1 className="vote-p1-header hf">Select a category:</h1>
            <div className="vp1-categories-container">
            {this.state.categories.map((c) => <div key={c.id} id={c.id} className="bf v-p1-category-div" onClick={this.handleClick}>{c.name}</div>)}
            </div>
            </div>
        )
    }
}