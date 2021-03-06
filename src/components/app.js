import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTopBtn from './menu/ScrollToTop';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Header from './menu/header';
import Home from './pages/home';
import HomeGrey from './pages/homeGrey';
import Home1 from './pages/home1';
import Home1grey from './pages/home1Grey';
import Home2 from './pages/home2';
import Home2grey from './pages/home2Grey';
import Home3 from './pages/home3';
import Home4 from './pages/home4';
import Home5 from './pages/home5';
import Home6 from './pages/home6';
import Explore from './pages/explore';
import Exploregrey from './pages/exploreGrey';
import Explore2 from './pages/explore2';
import Explore2grey from './pages/explore2Grey';
import ExploreOpensea from './pages/Opensea/explore';
// import Rangking from './pages/rangking';
import RankingRedux from './pages/RankingRedux';
import RankingReduxgrey from './pages/RankingReduxGrey';
import Auction from './pages/Auction';
import Auctiongrey from './pages/AuctionGrey';
import Helpcenter from './pages/helpcenter';
import Helpcentergrey from './pages/helpcenterGrey';
import Colection from './pages/colection';
import Colectiongrey from './pages/colectionGrey';
// import ItemDetail from './pages/ItemDetail';
import ItemDetailRedux from './pages/ItemDetailRedux';
import ItemDetailReduxgrey from './pages/ItemDetailReduxGrey';
import Author from './pages/Author';
import AuthorGrey from './pages/AuthorGrey';
import AuthorOpensea from './pages/Opensea/author';
import Wallet from './pages/wallet';
import WalletGrey from './pages/walletGrey';
import Login from './pages/login';
import Logingrey from './pages/loginGrey';
import LoginTwo from './pages/loginTwo';
import LoginTwogrey from './pages/loginTwoGrey';
import Register from './pages/register';
import Registergrey from './pages/registerGrey';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import NewsSingle from './pages/newsSingle';
import Create from './pages/create';
import Creategrey from './pages/createGrey';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Activitygrey from './pages/activityGrey';
import Contact from './pages/contact';
import Contactgrey from './pages/contactGrey';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';
import Minter from './pages/Minter';
import Mintergrey from './pages/MinterGrey';
import auth from '../core/auth';
import Profile from './pages/Profile';
import './app.css'
import 'react-notifications/lib/notifications.css';

//import CreateNft from './pages/Create/index.js';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const isAuth = auth.getToken() !== null;

  return (
      isAuth ? children : <Navigate to="/login" state={{ from: location }} replace />
  )
};

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      {/* <Route path="/Author">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Author />
            </ProtectedRoute>
          } 
        />
      </Route>
      <Route path="/Profile">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Route> */}
      <Route path="/home" element={<Home4 />} />
      <Route element={<Explore2/>} path="/explore" />
      <Route element={<RankingRedux/>} path="/rangking" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<ItemDetailRedux/>} path="/ItemDetail/:nftId" />
      <Route element={<Author/>} path="/collection/:authorId" />
      {/* <Route element={<Wallet />} path="/wallet" /> */}

    </Routes>
    <ScrollToTopBtn />
    <NotificationContainer/>

  </div>
);
export default app;