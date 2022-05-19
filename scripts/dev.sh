#!/bin/bash

parameters=(
    "--dist-dir dev"
    "--public-url ./"
    "--no-source-maps"
    "--no-hmr"
)

parcel watch ${parameters[@]}