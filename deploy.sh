#!/bin/sh
git ci -m "lol" && git push
cd ../prod
git pull
