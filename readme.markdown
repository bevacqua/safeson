# safeson

> Convert JSON to something you can safely embed in HTML

# Install

You can get it on npm.

```shell
npm install safeson --save
```

# Usage

## `safeson(data, spaces?)`

Takes data, turns it into JSON, and strips away HTML hazards

## `safeson.decode(data)`

Takes data previously encoded with `safeson` and unescapes it, then turns it into an object

# License

MIT
