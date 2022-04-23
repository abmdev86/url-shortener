# URL Shortner

## ![GIF](./public/url-launcher-gif-v1.1.gif)

Shortens URLs using the bitly.com API.

# Updates

---

v1.1 - updates styles and colors

### Must Provide http or https

```
http://www.yourdomain.top-domain...
```

or

```
https://www.yourdomain.top-domain/...
```

# DevLog

### Hooks vs ComponentDidMount

## --

[Hooks are functions that let you “hook into” React features from function components.](https://reactjs.org/docs/hooks-state.html)

## --

Used Hook function components to

- avoid using classes. Short hand way to call api vs componentDidMount, componentDidUpdate, and componentWillUnmount
- avoid having to duplicate the code between the two lifecycle methods componentDidMount, and componentDidUpdate
- creates a state variable that does not disapear.
- state does not have to be an object.
- this.state and this.setState all in one
- NO MORE this!

# Components

## Container

Holds the other components within the app.

## URLComponent

Handles users input, makes call to bitly api, displays the shorten url.

Hook Implementation
![Diagram](./public/urlDiagram-hook.svg)

## ---

## CopyToClipboardButton Component

Allows user to copy value provided when clicking the button
![Diagram](./public/CopyToClipboardButton%20Component.svg)
[CopyToClipboard NPM PAGE](https://www.npmjs.com/package/copy-to-clipboard)

```
npm install --save react-copy-to-clipboard
```
