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

    render() {
        return(
            <>
            <h1>Vote P1</h1>
            </>
        )
    }
}