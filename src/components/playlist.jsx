import React, { Component } from 'react';
import VideoPlaylist from './sub-components/video-playlist';
import Header from './header';
import Footer from './footer';
import ScrollToTop from './sub-components/scroll-to-top';
import {Helmet} from "react-helmet";

class Playlist extends Component {
  render() {
    return (
      <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Playlist - Darshiini VS |  Bharatanatyam  | Classical Dance</title>
                <link rel="canonical" href="https://darshiinivs.com/playlist" />
            </Helmet>
        <Header />
        <ScrollToTop />
        <div className="playlistPage">
          <span>PLAYLIST</span>
          <h1>Explore on My Playlist</h1>
          <VideoPlaylist />
        </div>
        <Footer />
      </>
    );
  }
}

export default Playlist;
