##! /bin/bash

protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
./src/**/*.proto \
--ts_proto_opt=returnObservable=true \
--ts_proto_opt=nestJs=true \
--ts_proto_out=.
