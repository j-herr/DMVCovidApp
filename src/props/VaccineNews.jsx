import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Card } from 'react-bootstrap';

const API = 'https://newsapi.org/v2/everything?' +
'q=vaccine&' +
'from=2020-11-12&' +
'sortBy=popularity&' +
'apiKey=4b0d28af43c340ea9794a5262f45426b';

class VaccineNews extends Component {
    constructor(props){
      super(props)
      this.state = {
          articles: [],
      };
    }
    
    componentDidMount(){
      fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ articles: data.articles}))
    }

    render() {
      const {articles} = this.state;
      return (
        <div>
          <Navbar bg = "dark" variant="dark">
            <Navbar.Brand>COVID-19 Vaccine News Dashboard</Navbar.Brand>
            </Navbar>
            {articles.map(article =>
                <Card style = {{width:'90rem'}}>
                    <Card.Body>
                    <Card.Title><a href={article.url}>{article.title}</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                    <Card.Text>{article.description}</Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
      )
    }
}
export default VaccineNews;
