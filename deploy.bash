#!/bin/bash
# Deploy franlopezm-spotify.surge.sh

# Remove last deploy
sudo rm -rf ./build
# Run new build
npm run build

# Publish in surge forcing https
# path: /Users/fran/franlopezm/spotify-react/build
# domain: franlopezm-spotify.surge.sh
surge --domain https://franlopezm-spotify.surge.sh
