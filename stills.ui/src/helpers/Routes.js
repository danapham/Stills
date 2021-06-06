import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import VoteP1 from '../views/VoteP1';
import VoteP2 from '../views/VoteP2';
import AddP1 from '../views/AddP1';
import ChartsP1 from '../views/ChartsP1';
import ProfileP1 from '../views/ProfileP1';
import ProfileP2 from '../views/ProfileP2';
import ProfileP3 from '../views/ProfileP3';
import ProfileP4 from '../views/ProfileP4';
import PhotoDetailP1 from '../views/PhotoDetailP1';

export default function Routes({ user }) {
    return (
              <Switch>
                  <Route exact path='/' component={() => <Home />} />
                  <Route exact path='/vote-p1' component={() => <VoteP1 />} />
                  <Route exact path='/vote-p2' component={() => <VoteP2 />} />
                  <Route exact path='/add-p1' component={(props) => <AddP1 user={user} {...props} />} />
                  <Route exact path='/charts-p1' component={() => <ChartsP1 />} />
                  <Route exact path='/profile-p1' component={() => <ProfileP1 />} />
                  <Route exact path='/profile-p2' component={() => <ProfileP2 />} />
                  <Route exact path='/profile-p3' component={() => <ProfileP3 />} />
                  <Route exact path='/profile-p4' component={() => <ProfileP4 />} />
                  <Route exact path='/photoDetail-p1' component={() => <PhotoDetailP1 />} />
              </Switch>
    );
  }