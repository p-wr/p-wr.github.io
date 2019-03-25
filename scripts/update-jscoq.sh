#!/bin/bash

here=`pwd`
there=~/var/ext/jscoq

cd $there

rm -rf dist
make dist

# Replace index with sample
rm dist/index.html
sed 's/dev-only.*//' sample.html > dist/index.html

cd $here
rm -rf jscoq
mv $there/dist ./jscoq
( cd jscoq && npm i )

