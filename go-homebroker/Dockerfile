FROM golang:1.24.0-bullseye AS build

WORKDIR /app

COPY go.* ./
RUN go mod download

COPY . /app

# RUN go clean

RUN go build -v -o homebroker ./cmd/trade/

## Final Stage
FROM ubuntu

WORKDIR /app

COPY --from=build /app/homebroker /app/

CMD ["./homebroker"]