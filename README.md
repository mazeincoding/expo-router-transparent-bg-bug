# Expo Router Stack Background Bug

Minimal reproduction of a bug where Stack navigation shows a white background despite transparent settings.

## The Issue
When using expo-router's Stack navigation with a background image, the Stack shows a white background that cannot be made transparent, even when setting `contentStyle: { backgroundColor: "transparent" }`.

## Steps to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm start`
4. Observe the white background between the image and the content

## Expected behavior
The Stack should be transparent, allowing the background image to show through.

## Actual behavior
A white background appears between the background image and the Stack content.

## Notice
I have not tested this on Android. The issue may only occur on iOS.