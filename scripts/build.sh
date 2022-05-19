#!/bin/bash

parameters=(
    "--dist-dir docs"
    "--public-url ./"
    "--no-source-maps"
    "--no-content-hash"
)

parcel build ${parameters[@]}