#!/bin/bash

here=`pwd`
lab=~/var/workspace/Web.Verify.Coq
repo=~/var/workspace/Teaching.SSAR

sed 's/dev-only.*//' $lab/src/lab.html | sed 's/ssar =.*/ssar = ".\/repo";/' | \
    sed 's/\.\.\/node_modules\/jscoq/..\/jscoq/' > ./ssar/lab.html

sed 's/\.\.\/img/.\/img/' $lab/src/lab.css > ./ssar/lab.css

cp -r ~/var/workspace/Web.Verify.Coq/img ./ssar/

mkdir -p ./ssar/repo
cp -r $repo/* ./ssar/repo/
