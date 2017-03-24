# EthWebClient

This is intended to be a generalised web app that can log users in, authenticate them and then do a whole bunch of great things with blockchains, limited only by your imagination.

You need to be running a chain and having it ouput the transactions or events to port 3032 for this to work nicely. I actually have an Ethereum chain running across some VMs that talks to a Node API that then listens on port 3032 and passes the necessary data to the Angular 2 frontend.

You will also need a running instance of MongoDB so that you can keep track of all the things in development and whatever else it is you like to do late at night with all your data...

I work on a Mac, so to get Mongo going, all you need to do is:

```
brew update
brew install mongodb
```

Then you need to create the default directory for your data and change the permissions on it so that Mongo can write to it:

```
sudo mkdir /data/db
sudo chown $USER /data/db
```

Play and have fun!
