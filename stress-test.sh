#!/bin/bash
for x in {1..1000}; do
  curl <node-ip>:<port>
  sleep $1
done