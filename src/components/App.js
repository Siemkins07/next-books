import React from 'react';
import '../styles/App.css';
import SearchTitle from './SearchTitle';
import Result from './Result';
import SearchAuthor from './SearchAuthor';
import AdvancedOptionsCheckbox from './AdvancedOptionsCheckbox';
import AdvancedOptions from './AdvancedOptions';

const apiKey = 'AIzaSyD3Mge59SgwBDjwe9nJ7bnSeQ1KverQT1Y'

class App extends React.Component {
  state = {
    title: '',
    author: '',
    sort: false,
    language: '',
    number: '',
    areAdvancedOptionsVisible: false,
    books: [],
    click: 0,
  }

  handleInputChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    })
  }

  handleInputChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  handleCheckbox = (e) => {
    this.setState({
      sort: e.target.checked
    })
  }

  handleChangeLanguage = (e) => {
    this.setState({
      language: e.target.value
    })
  }

  handleChangeNumber = (e) => {
    this.setState({
      number: e.target.value
    })
  }

  handlaChangeVisible = (e) => {
    this.setState({
      areAdvancedOptionsVisible: e.target.checked
    })
  }

  handleBookSearch = (e) => {
    const { title, author, sort, language, number } = this.state
    e.preventDefault();

    let apiUrl = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&printType=books&`

    if ((title.length >= 3) && (author.length >= 3)) {
      apiUrl += `q="${title}"&intitle=true+inauthor:${author}`
    } else if (title.length >= 3) {
      apiUrl += `q="${title}"&intitle=true`
    } else if (author.length >= 3) {
      apiUrl += `q=inauthor:${author}`
    } else return alert('Szukana fraza musi składać z min. 3 znaków')

    if (language) {
      apiUrl += `&langRestrict=${language}`
    }

    if (sort) {
      apiUrl += `&orderBy=newest`
    }

    if (number) {
      apiUrl += `&maxResults=${number}`
    }

    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error(response.status)
      })
      .then(response => response.json())
      .then(result => {

        this.setState(prevState => ({
          books: result.items,
          title: '',
          author: '',
          sort: false,
          language: '',
          number: '',
          click: prevState.click + 1
        }))
      })
      .catch(error => console.log(error + " Problem"))
  }

  render() {
    const { books, title, author, sort, language, number, areAdvancedOptionsVisible, click } = this.state
    return (

      <div className="App">
        <form onSubmit={this.handleBookSearch} >
          <h3>Znajdź interesującą Cię książkę</h3>
          <div className='basicOptions'>
            <SearchTitle title={title} change={this.handleInputChangeTitle} />
            <SearchAuthor author={author} change={this.handleInputChangeAuthor} />
            <input className='search' type="submit" value="OK" />
          </div>
          <div className='advancedOptions'>
            <AdvancedOptionsCheckbox areAdvancedOptionsVisible={areAdvancedOptionsVisible} change={this.handlaChangeVisible} />
            <br />
            {areAdvancedOptionsVisible ? <AdvancedOptions language={language} number={number} sort={sort} changeLang={this.handleChangeLanguage} changeNum={this.handleChangeNumber} changeSort={this.handleCheckbox} /> : null}
          </div>
        </form>
        <Result books={books} click={click} />
      </div>
    );
  }
}

export default App;
