#!/bin/bash

here=`pwd`
lab=~/var/workspace/Teaching.SSAR.Labspace
repo=~/var/workspace/Teaching.SSAR

sed 's/dev-only.*//' $lab/index.html > ./ssar/index.html

cp -r $lab/lab.css $lab/img ./ssar/

mkdir -p ./ssar/repo
cp -r $repo/* ./ssar/repo/
