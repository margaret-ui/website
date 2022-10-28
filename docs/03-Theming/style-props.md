---
id: style-props
title: Style props
---

# Style props

In order not to bloat our UI with too many styled components with little purpose, all Margaret components based on `<Box />` have access to style props that transform to pure CSS.

## Responsiveness

All of the style props listed below are responsive. This means that they accept either a fixed value, or an object whose keys are theme breakpoints.

```jsx
<Box color="blue" />

// Generates
// .box {
//   color: blue;
// }



<Box
  color={{
    default: "blue",
    medium: "green"
  }}
/>

// Generates (if breakpoints are not customized)
// .box {
//   color: blue;
// }
//
// @media screen and (min-width: 800px) {
//   color: green;
// }
```

## Theme matching

Some of these props are linked with the theme, as props related to colors, spacings, or typography.

For the exhaustive matching, see [the reference table](#reference-table)

## Reference table

### Spacing props

Spacing props call the `theme.spacing()` function, which defaults to `input => ${input}rem`.

```jsx
<Box margin={1.5} />

// Generates
// .box {
//   margin: 1.5rem;
// }
```

| Prop                 | CSS Property                     | Theme key         |
| -------------------- | -------------------------------- | ----------------- |
| `gap`                | `gap`                            | `theme.spacing()` |
| `gridColumnGap`      | `grid-column-gap`                | `theme.spacing()` |
| `gridGap`            | `grid-gap`                       | `theme.spacing()` |
| `gridRowGap`         | `grid-row-gap`                   | `theme.spacing()` |
| `marginBlockEnd`     | `margin-block-end`               | `theme.spacing()` |
| `marginBlockStart`   | `margin-block-start`             | `theme.spacing()` |
| `marginBlock`        | `margin-block`                   | `theme.spacing()` |
| `marginBottom`       | `margin-bottom`                  | `theme.spacing()` |
| `marginHorizontal`   | `margin-left` + `margin-right`   | `theme.spacing()` |
| `marginInlineEnd`    | `margin-inline-end`              | `theme.spacing()` |
| `marginInlineStart`  | `margin-inline-start`            | `theme.spacing()` |
| `marginInline`       | `margin-inline`                  | `theme.spacing()` |
| `marginLeft`         | `margin-left`                    | `theme.spacing()` |
| `marginRight`        | `margin-right`                   | `theme.spacing()` |
| `marginTop`          | `margin-top`                     | `theme.spacing()` |
| `marginVertical`     | `margin-top` + `margin-bottom`   | `theme.spacing()` |
| `marginX`            | `margin-left` + `margin-right`   | `theme.spacing()` |
| `marginY`            | `margin-top` + `margin-bottom`   | `theme.spacing()` |
| `margin`             | `margin`                         | `theme.spacing()` |
| `paddingBlockEnd`    | `padding-block-end`              | `theme.spacing()` |
| `paddingBlockStart`  | `padding-block-start`            | `theme.spacing()` |
| `paddingBlock`       | `padding-block`                  | `theme.spacing()` |
| `paddingBottom`      | `padding-bottom`                 | `theme.spacing()` |
| `paddingHorizontal`  | `padding-left` + `padding-right` | `theme.spacing()` |
| `paddingInlineEnd`   | `padding-inline-end`             | `theme.spacing()` |
| `paddingInlineStart` | `padding-inline-start`           | `theme.spacing()` |
| `paddingInline`      | `padding-inline`                 | `theme.spacing()` |
| `paddingLeft`        | `padding-left`                   | `theme.spacing()` |
| `paddingRight`       | `padding-right`                  | `theme.spacing()` |
| `paddingTop`         | `padding-top`                    | `theme.spacing()` |
| `paddingVertical`    | `padding-top` + `padding-bottom` | `theme.spacing()` |
| `paddingX`           | `padding-left` + `padding-right` | `theme.spacing()` |
| `paddingY`           | `padding-top` + `padding-bottom` | `theme.spacing()` |
| `padding`            | `padding`                        | `theme.spacing()` |

### Border radii props

```jsx
// In component
<Box borderTopLeftRadius="full" />

// In theme
{
  borderRadius: {
    full: '999em',
  },
}

// Generates
// .box {
//   border-top-left-radius: 999em;
// }
```

| Prop                      | CSS Property                 | Theme key                   |
| ------------------------- | ---------------------------- | --------------------------- |
| `borderBottomLeftRadius`  | `border-bottom-left-radius`  | `theme.borderRadius[value]` |
| `borderBottomRightRadius` | `border-bottom-right-radius` | `theme.borderRadius[value]` |
| `borderEndEndRadius`      | `border-end-end-radius`      | `theme.borderRadius[value]` |
| `borderEndStartRadius`    | `border-end-start-radius`    | `theme.borderRadius[value]` |
| `borderRadius`            | `border-radius`              | `theme.borderRadius[value]` |
| `borderStartEndRadius`    | `border-start-end-radius`    | `theme.borderRadius[value]` |
| `borderStartStartRadius`  | `border-start-start-radius`  | `theme.borderRadius[value]` |
| `borderTopLeftRadius`     | `border-top-left-radius`     | `theme.borderRadius[value]` |
| `borderTopRightRadius`    | `border-top-right-radius`    | `theme.borderRadius[value]` |

### Color props

```jsx
// In component
<Box color="red" />
<Box color="primary" />
<Box color="secondary" />
<Box color="#bada55" />

// In theme
{
  colors: {
    red: '#ff0000'
  },
  primary: {
    light: '#bada55',
  },
  secondary: '#c55'
}

// Generates
// .box {
//   color: #ff0000;
// }
// .box2 {
//   color: #bada55;
// }
// .box3 {
//   color: #c55;
// }
// .box4 {
//   color: #bada55;
// }
```

| Prop                     | CSS Property                | Theme key                                                          |
| ------------------------ | --------------------------- | ------------------------------------------------------------------ |
| `backgroundColor`        | `background-color`          | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderBlockColor`       | `border-block-color`        | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderBlockEndColor`    | `border-block-end-color`    | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderBlockStartColor`  | `border-block-start-color`  | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderBottomColor`      | `border-bottom-color`       | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderInlineColor`      | `border-inline-color`       | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderInlineEndColor`   | `border-inline-end-color`   | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderInlineStartColor` | `border-inline-start-color` | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderLeftColor`        | `border-left-color`         | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderRightColor`       | `border-right-color`        | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `borderTopColor`         | `border-top-color`          | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |
| `color`                  | `color`                     | `theme.colors[value] | theme[value][colorMode] | theme[value] | —` |

### Shadow props

```jsx
// In component
<Box boxShadow="elevation1" />
<Box textShadow="elevation1" />
<Box color="secondary" />
<Box color="#bada55" />

// In theme
{
  colors: {
    red: '0 2px 8px var(--colors-shades-100)'
  },
  primary: {
    light: '#bada55',
  },
  secondary: '#c55'
}

// Generates
// .box {
//   color: #ff0000;
// }
// .box2 {
//   color: #bada55;
// }
// .box3 {
//   color: #c55;
// }
// .box4 {
//   color: #bada55;
// }
```

| Prop         | CSS Property | Theme key                                                       |
| ------------ | ------------ | --------------------------------------------------------------- |
| `boxShadow`  | `box-shadow` | `theme.shadows[value] | —`                                      |
| `textShadow` | `box-shadow` | `theme.fontStyles[value].textShadow | theme.shadows[value] | —` |

### Typography props

Typography props are sourced from the fontStyles theme property

| Prop             | CSS Property      | Theme key                 |
| ---------------- | ----------------- | ------------------------- |
| `fontStretch`    | `font-stretch`    | `theme.fontStyles[value]` |
| `fontStyle`      | `font-style`      | `theme.fontStyles[value]` |
| `fontVariant`    | `font-variant`    | `theme.fontStyles[value]` |
| `fontWeight`     | `font-weight`     | `theme.fontStyles[value]` |
| `letterSpacing`  | `letter-spacing`  | `theme.fontStyles[value]` |
| `textDecoration` | `text-decoration` | `theme.fontStyles[value]` |
| `textTransform`  | `text-transform`  | `theme.fontStyles[value]` |

### Other props

The props listed below are not bound to any theme key, but converts the values to pure CSS.

```jsx
<Box display="flex" />

// generates
// .box {
//   display: flex;
// }
```

| Prop                      | CSS Property                | Theme key |
| ------------------------- | --------------------------- | --------- |
| `accentColor`             | `accent-color`              | —         |
| `alignContent`            | `align-content`             | —         |
| `alignItems`              | `align-items`               | —         |
| `alignSelf`               | `align-self`                | —         |
| `all`                     | `all`                       | —         |
| `animationDelay`          | `animation-delay`           | —         |
| `animationDirection`      | `animation-direction`       | —         |
| `animationDuration`       | `animation-duration`        | —         |
| `animationFillMode`       | `animation-fill-mode`       | —         |
| `animationIterationCount` | `animation-iteration-count` | —         |
| `animationName`           | `animation-name`            | —         |
| `animationPlayState`      | `animation-play-state`      | —         |
| `animationTimingFunction` | `animation-timing-function` | —         |
| `animation`               | `animation`                 | —         |
| `appearance`              | `appearance`                | —         |
| `aspectRatio`             | `aspect-ratio`              | —         |
| `backdropFilter`          | `backdrop-filter`           | —         |
| `backdropVisibility`      | `backdrop-visibility`       | —         |
| `backgroundAttachment`    | `background-attachment`     | —         |
| `backgroundBlendMode`     | `background-blend-mode`     | —         |
| `backgroundClip`          | `background-clip`           | —         |
| `backgroundOrigin`        | `background-origin`         | —         |
| `backgroundPositionX`     | `background-position-x`     | —         |
| `backgroundPositionY`     | `background-position-y`     | —         |
| `backgroundPosition`      | `background-position`       | —         |
| `backgroundRepeat`        | `background-repeat`         | —         |
| `backgroundSize`          | `background-size`           | —         |
| `background`              | `background`                | —         |
| `borderBlockEndStyle`     | `border-block-end-style`    | —         |
| `borderBlockEndWidth`     | `border-block-end-width`    | —         |
| `borderBlockEnd`          | `border-block-end`          | —         |
| `borderBlockStartStyle`   | `border-block-start-style`  | —         |
| `borderBlockStartWidth`   | `border-block-start-width`  | —         |
| `borderBlockStart`        | `border-block-start`        | —         |
| `borderBlockStyle`        | `border-block-style`        | —         |
| `borderBlockWidth`        | `border-block-width`        | —         |
| `borderBlock`             | `border-block`              | —         |
| `borderBottomStyle`       | `border-bottom-style`       | —         |
| `borderBottomWidth`       | `border-bottom-width`       | —         |
| `borderBottom`            | `border-bottom`             | —         |
| `borderCollapse`          | `border-collapse`           | —         |
| `borderColor`             | `border-color`              | —         |
| `borderImageOutset`       | `border-image-outset`       | —         |
| `borderImageRepeat`       | `border-image-repeat`       | —         |
| `borderImageSlice`        | `border-image-slice`        | —         |
| `borderImageSource`       | `border-image-source`       | —         |
| `borderImageWidth`        | `border-image-width`        | —         |
| `borderImage`             | `border-image`              | —         |
| `borderInlineEndStyle`    | `border-inline-end-style`   | —         |
| `borderInlineEndWidth`    | `border-inline-end-width`   | —         |
| `borderInlineEnd`         | `border-inline-end`         | —         |
| `borderInlineStartStyle`  | `border-inline-start-style` | —         |
| `borderInlineStartWidth`  | `border-inline-start-width` | —         |
| `borderInlineStart`       | `border-inline-start`       | —         |
| `borderInlineStyle`       | `border-inline-style`       | —         |
| `borderInlineWidth`       | `border-inline-width`       | —         |
| `borderInline`            | `border-inline`             | —         |
| `borderLeftStyle`         | `border-left-style`         | —         |
| `borderLeftWidth`         | `border-left-width`         | —         |
| `borderLeft`              | `border-left`               | —         |
| `borderRightStyle`        | `border-right-style`        | —         |
| `borderRightWidth`        | `border-right-width`        | —         |
| `borderRight`             | `border-right`              | —         |
| `borderSpacing`           | `border-spacing`            | —         |
| `borderStyle`             | `border-style`              | —         |
| `borderTopStyle`          | `border-top-style`          | —         |
| `borderTopWidth`          | `border-top-width`          | —         |
| `borderTop`               | `border-top`                | —         |
| `borderWidth`             | `border-width`              | —         |
| `border`                  | `border`                    | —         |
| `bottom`                  | `bottom`                    | —         |
| `clipPath`                | `clip-path`                 | —         |
| `colorScheme`             | `color-scheme`              | —         |
| `cursor`                  | `cursor`                    | —         |
| `display`                 | `display`                   | —         |
| `flexBasis`               | `flex-basis`                | —         |
| `flexDirection`           | `flex-direction`            | —         |
| `flexFlow`                | `flex-flow`                 | —         |
| `flexGrow`                | `flex-grow`                 | —         |
| `flexShrink`              | `flex-shrink`               | —         |
| `flexWrap`                | `flex-wrap`                 | —         |
| `flex`                    | `flex`                      | —         |
| `gridArea`                | `grid-area`                 | —         |
| `gridAutoColumns`         | `grid-auto-columns`         | —         |
| `gridAutoFlow`            | `grid-auto-flow`            | —         |
| `gridAutoRows`            | `grid-auto-rows`            | —         |
| `gridColumnEnd`           | `grid-column-end`           | —         |
| `gridColumnStart`         | `grid-column-start`         | —         |
| `gridColumn`              | `grid-column`               | —         |
| `gridRowEnd`              | `grid-row-end`              | —         |
| `gridRowStart`            | `grid-row-start`            | —         |
| `gridRow`                 | `grid-row`                  | —         |
| `gridTemplateAreas`       | `grid-template-areas`       | —         |
| `gridTemplateColumns`     | `grid-template-columns`     | —         |
| `gridTemplateRows`        | `grid-template-rows`        | —         |
| `grid`                    | `grid`                      | —         |
| `height`                  | `height`                    | —         |
| `inset`                   | `inset`                     | —         |
| `justifyContent`          | `justify-content`           | —         |
| `justifySelf`             | `justify-self`              | —         |
| `left`                    | `left`                      | —         |
| `maskBorderMode`          | `mask-border-mode`          | —         |
| `maskBorderOutset`        | `mask-border-outset`        | —         |
| `maskBorderRepeat`        | `mask-border-repeat`        | —         |
| `maskBorderSlice`         | `mask-border-slice`         | —         |
| `maskBorderSource`        | `mask-border-source`        | —         |
| `maskBorderWidth`         | `mask-border-width`         | —         |
| `maskBorder`              | `mask-border`               | —         |
| `maskClip`                | `mask-clip`                 | —         |
| `maskComposite`           | `mask-composite`            | —         |
| `maskImage`               | `mask-image`                | —         |
| `maskMode`                | `mask-mode`                 | —         |
| `maskOrigin`              | `mask-origin`               | —         |
| `maskPosition`            | `mask-position`             | —         |
| `maskRepeat`              | `mask-repeat`               | —         |
| `maskSize`                | `mask-size`                 | —         |
| `maskType`                | `mask-type`                 | —         |
| `mask`                    | `mask`                      | —         |
| `maxHeight`               | `max-height`                | —         |
| `maxWidth`                | `max-width`                 | —         |
| `minHeight`               | `min-height`                | —         |
| `minWidth`                | `min-width`                 | —         |
| `objectFit`               | `object-fit`                | —         |
| `objectPosition`          | `object-position`           | —         |
| `opacity`                 | `opacity`                   | —         |
| `order`                   | `order`                     | —         |
| `outlineColor`            | `outline-color`             | —         |
| `outlineOffset`           | `outline-offset`            | —         |
| `outlineStyle`            | `outline-style`             | —         |
| `outline`                 | `outline`                   | —         |
| `overflowX`               | `overflow-x`                | —         |
| `overflowY`               | `overflow-y`                | —         |
| `overflow`                | `overflow`                  | —         |
| `placeContent`            | `place-content`             | —         |
| `placeItems`              | `place-items`               | —         |
| `placeSelf`               | `place-self`                | —         |
| `position`                | `position`                  | —         |
| `right`                   | `right`                     | —         |
| `textAlign`               | `text-align`                | —         |
| `textOverflow`            | `text-overflow`             | —         |
| `top`                     | `top`                       | —         |
| `transform`               | `transform`                 | —         |
| `transition`              | `transition`                | —         |
| `whiteSpace`              | `white-space`               | —         |
| `width`                   | `width`                     | —         |
| `willChange`              | `will-change`               | —         |
| `wordBreak`               | `word-break`                | —         |
| `wordWrap`                | `word-wrap`                 | —         |
| `zIndex`                  | `z-index`                   | —         |
