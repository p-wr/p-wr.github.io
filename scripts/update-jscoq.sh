#!/bin/bash

here=`pwd`
there=~/var/ext/jscoq-v8.9

cd $there

rm -rf dist
make dist

# Replace index with sample
rm dist/index.html
sed 's/dev-only.*//' examples/gentle-intro.html > dist/index.html

cd $here
rm -rf jscoq
mv $there/dist ./jscoq

