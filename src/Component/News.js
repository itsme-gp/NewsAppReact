import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  // articles= [
  //     {
  //       "source": { "id": "breitbart-news", "name": "Breitbart News" },
  //       "author": "Warner Todd Huston",
  //       "title": "WI Dem. Gov. Tony Evers Vetoes Bill to Protect Girls' Sports from Trans Athletes",
  //       "description": "Wisconsin's liberal Democrat Gov. Tony Evers arranged a showy veto ceremony Tuesday to deny passage to a bill that would protect girls' sports",
  //       "url": "https://www.breitbart.com/sports/2024/04/02/wi-dem-gov-tony-evers-vetoes-bill-that-would-protect-girls-sports-trans-athletes/",
  //       "urlToImage": "https://media.breitbart.com/media/2020/02/transgender-athletes-win-girls-hs-track-file-ap-640x480-640x480-640x480-1-640x480-1-640x480-1-640x335.jpg",
  //       "publishedAt": "2024-04-02T21:10:48Z",
  //       "content": "Wisconsin’s liberal Democrat Gov. Tony Evers arranged a showy veto ceremony Tuesday to deny passage to a bill that would protect girls’ sports in the Dairy State.\r\nThe bill would have banned transgen… [+3299 chars]"
  //     },
  //     {
  //       "source": { "id": "polygon", "name": "Polygon" },
  //       "author": "Nicole Carpenter",
  //       "title": "Xbox Game Pass free games April 2024: Shadow of the Tomb Raider and more",
  //       "description": "Microsoft is adding eight games to its Xbox Game Pass lineup in April 2024: Lego 2K Drive, Shadow of the Tomb Raider, EA Sports PGA Tour. and more",
  //       "url": "https://www.polygon.com/24118920/xbox-game-pass-april-2024-free-games-tomb-raider",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/UQuoWmYg47x5MufYwatEwNZM9N8=/0x0:3840x2010/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13054753/zuy2rjbswr7xabkokzb3.jpg",
  //       "publishedAt": "2024-04-02T15:01:00Z",
  //       "content": "Shadow of the Tomb Raider, Eidos-Montréals 2018 sequel to Rise of the Tomb Raider, headlines Microsofts Xbox Game Pass lineup in April. Its backed by a solid, well-rounded lineup including the likes … [+1971 chars]"
  //     },
  //     {
  //       "source": { "id": "reuters", "name": "Reuters" },
  //       "author": null,
  //       "title": "Sports News | Breaking & Latest Sports News | Reuters",
  //       "description": "Find latest sports news from every corner of the globe at Reuters.com, your online source for breaking international news coverage.",
  //       "url": "https://www.reuters.com/sports/",
  //       "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.webp?d=184",
  //       "publishedAt": "2024-03-29T05:22:19.2739907Z",
  //       "content": null
  //     },
  //     {
  //       "source": { "id": "fox-sports", "name": "Fox Sports" },
  //       "author": "John Fanta, Michael Cohen",
  //       "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
  //       "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
  //       "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
  //       "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
  //       "publishedAt": "2024-02-29T20:59:30Z",
  //       "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
  //     },
  //     {
  //       "source": { "id": "bleacher-report", "name": "Bleacher Report" },
  //       "author": null,
  //       "title": "New Micah Parsons Show ",
  //       "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
  //       "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
  //       "urlToImage": null,
  //       "publishedAt": "2023-11-27T20:37:24.6381564Z",
  //       "content": null
  //     },
  //     {
  //       "source": { "id": "bleacher-report", "name": "Bleacher Report" },
  //       "author": null,
  //       "title": " Mikal Bridges Interview ",
  //       "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
  //       "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
  //       "urlToImage": null,
  //       "publishedAt": "2023-11-27T20:37:24.3882176Z",
  //       "content": "Nets star sits down with Taylor Rooks for exclusive convo."
  //     },
  //     {
  //       "source": { "id": "reuters", "name": "Reuters" },
  //       "author": "Reuters Graphics",
  //       "title": "Reuters Graphics - Charts, Maps, Interactive Graphics and Videos",
  //       "description": "The latest world news - politics, sports, culture, science and environment - from our graphics journalists in Singapore, Bangalore, London and New York.",
  //       "url": "https://www.reuters.com/graphics/",
  //       "urlToImage": "https://www.reuters.com/graphics/cdn/img/home.jpg",
  //       "publishedAt": "2020-12-21T00:00:00Z",
  //       "content": null
  //     }
  //   ]

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("im constructor from news ");
    this.state = {
      //articles:this.articles,
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d81c93e0d4a4ad2aea6ffaa2450a458&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=7d81c93e0d4a4ad2aea6ffaa2450a458&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=7d81c93e0d4a4ad2aea6ffaa2450a458&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
