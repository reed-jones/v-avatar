# v-avatar
Easy plug and play user avatars. Current providers include [RoboHash](https://robohash.org), [Adorable](https://api.adorable.io), [UI Avatars](https://ui-avatars.com), and [Gravatar](https://www.gravatar.com).

## Project installation
```sh
yarn add @j0nz/v-avatar
```

```js
// main.js
import VAvatar from '@j0nz/v-avatar'
Vue.use(VAvatar)
```

```html
<!-- App.vue -->
<v-avatar mode='robohash'
    :size='512'
    :robohashOptions='{sets: "set4", bgset: "bg2"}'
    username='fuzzykitten'/>
```

## Identifier
> The identifier is what is used to create the unique* avatar deterministically (so the same user will always get the same avatar). With the exception of the _gravatar_ mode, the order of precedince is: 1. name, 2. username, 3. email, 4. hash. so with that in mind, if you wanted the avatar to be generated from, lets say, the users email you must not supply a name or username prop. Gravatar works a little differently by trying the hash first, then hashing the email and trying that.

| Prop | Type | Default | Description |
|--|--|--|--|
| name | String | | Sets the users name
| username | String | | Sets the users username
| email | String | | Sets the users email
| hash | String | | Sets the avatar hash

## Options
#### Common Options to all modes
| Prop | Type | Default | Description |
|--|--|--|--|
| mode | String | initials | must be _one_ of [ initials, robohash, adorable, gravatar ]
| size | Number | 128 | Size of the image to be loaded
| alt | String |  | alt tag to be applied to the image. falls back to the used identifier

### Mode specific configurations

| Prop | Type | Default | Description |
|--|--|--|--|
| uiAvatarOptions | Object | see below | Options applied when mode is set to _**initials**_
```js
{
    background: '0D8ABC',   // notice no '#'
    color: 'fff',           // notice no '#'
    'font-size': 0.5,       // default 0.5, available: 0.1 - 1
    length: 2,              // number of chars to be displayed
    rounded: true,          // rounded ot square image
    uppercase: true,        // casing of letters
}
```
| Prop | Type | Default | Description |
|--|--|--|--|
| robohashOptions | Object | see below | Options applied when mode is set to _**robohash**_

```js
{
    bgset: ['bg1', 'bg2', false],           // pick one.
    sets: ['set1', 'set2', 'set3', 'set4'], // pick one, or several
    set: false,         // set to 'any' to get all sets
    gravatar: null,     // 'yes' if using email, 'hashed' if using hash identifier (and want to get your gravatar)
}
```
| Prop | Type | Default | Description |
|--|--|--|--|
| gravatarOptions | Object | see below | Options applied when mode is set to _**gravatar**_
```js
{
    d: 'identicon', // default/fallback: pick one of [ mp, identicon, monsterid, wavatar, retro, robohash, blank ]
    f: null,        // force-default/fallback: set to 'y' if desired
    r: 'g',         // gravatar rating: g, pg, r, x
}
```
