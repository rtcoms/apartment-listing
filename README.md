# README

This Porject uses following libraries

Backend - 

      Ruby on Rails,
      Ruby 2.7.2
      Sqlite3
      kaminari for pagination
      fast_jsonapi for serialization
      rspec for test cases

Frontend - 

      Component library: React
      State management library: easy-peasy
      Form library: react-hook-form
      ui library: chakra ui
      react/testing-library for front-end tests


Instructions to setup project:

    1) Clone repository: git clone git@github.com:rtcoms/apartment-listing.git
    2) Install gems: cd apartment-listing; bundle install
    3) yarn install

Starting app:
   
      This project uses sqlite database which should be installed along with the gem. Existing data dump in project already has 100 apartments in it.
      To insert more apartments in db use `bundle exec rails db:seed` command
   
    cd apartment-listing
    bundle exec rails db:create
    bundle exec rails db:migrate
    bundle exec rails db:seed
    Start rails server: bundle exec rails s
    Start js module bundler webpack: bin/webpack-dev-server
    
    Go to: http://localhost3000

Run test:

    Backend tests: bundle exec rspec spec
    Frontend tests: yarn test


Observations: 

    Not using state management library would've probably made implementation easier, although I wanted to explore easy-peasy and that worked out to be much better to implement and understand than raw redux implementation. 


Pending work:

    Make browser backk button work properly.
    Fix testing cases of components which uses api call - Couldn't make it work even after following documentation
    Fix filter form styling
    update url properly in browser on state changes, ideally this should be at single place
    Implement infinite scroll
