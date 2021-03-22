# State Management

## React Router

-   [L5 40 Build Out The Contact Form V2](https://youtu.be/p3v2dgrqJsg)
-   [L5 43 Handle Submission Of The Contact Form V2](https://youtu.be/aAhaXlQ2G6I)
-   [L5 46 Add New Contact To State V2](https://youtu.be/24lu6iVQHro)

With react router, the user can:

-   click on back button
-   click forward button
-   click refresh button
-   open in a new tab
-

# Redux

## Async Redux

-   [React & Redux L5 53 Mixed Logic V5](https://youtu.be/WHbfLpT0Ftg)
-   [L522 Custom Thunk V3](https://youtu.be/rrEV_gNSvmM)
-   [L529 Thunkify Goals V2](https://youtu.be/WysYSogVCAo)
-   [L531 Thunkify Todos V2](https://youtu.be/GAn1-rLDmYc)
-   [L533 Thunkify Initial Data V2](https://youtu.be/Bzn33iPkKDA)

Q: What are the benefits of using thunk middleware?

A: Asynchronicity and Components don't need to handle what happens after async calls. Thunk middleware can then be used to delay an action dispatch, or to dispatch only if a certain condition is met (e.g., a request is resolved). This logic lives inside action creators rather than inside components.

Q: Take a look at this example:

```javascript
export const fetchTodos = () => (dispatch) =>
    TodoAPIUtil.fetchTodos().then((todos) => dispatch(receiveTodos(todos)));
```

Please place the following events in order of execution:

A: - API requests occurs - API request is resolved - Thunk middleware invokes the function with `dispatch()` - The action returned by `receiveTodos` is dispatched

We expect the API request to occur first. TodoAPIUtil.fetchTodos() needs to be resolved before anything else can be done. Once the request is resolved, thunk middleware then invokes the function with dispatch(). Keep in mind: the action is only ever dispatched after the API request is resolved.

## react-redux

-   [L606 Create React App V2](https://youtu.be/QzBtsjxouyw)
-   [L607 Actions V2](https://youtu.be/JnBpKGOqqwc)
-   [L608 Reducers V2](https://youtu.be/N-44Rn9B8QY)
-   [L609 Middleware V2](https://youtu.be/sgRSJuKLB8g)
-   [L610 Components V2](https://youtu.be/zu_OuldiJw4)
-   [L611 The Store V2](https://youtu.be/hC6WWIXVlSo)
    Q: check all that are true

A: Provider is really just a React component that we use to wrap the entire application. It takes in the store as a prop, then sets the store context, passing it down to all its subcomponents. All components wrapped by Provider will receive the store context. What differentiates containers from presentational components?

Q: connect() connects which two items?

A: store and component. Using connect(), we can conveniently access the store context set by Provider. We pass in parts of the state as well as action-dispatches to the components as props.

Q: Assume that MyComponent is a simple React component. How can MyComponent access state?

A: mapStateToProps is a function that lets connect() know how to map state into the component’s list of props.

```javascript
const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyComponent);
```

## Real-world Redux

-   [L702 Introduction To Chirper V2](https://youtu.be/tF5ES2V20xY)
-   [L705 First Actions V1](https://youtu.be/Px3vpZBHhHI)
-   [L729 Authorized User Action V1](https://youtu.be/-cqWNcFKB5E)
-   [L704 Reducers V2](https://youtu.be/QnntUz8r9lo)
-   [L704 Creating The Store V2](https://youtu.be/Ac3-sWH49XY)
-   [L705 Project Middleware V2](https://youtu.be/HXYqXy4uflw)
-   [L706 Initial Data V2](https://youtu.be/ydXVJmVqebQ)
-   [L707 Dashboard V2](https://youtu.be/xjqf3vm3KjY)
-   [L733 Handling A Parent Tweet V1](https://youtu.be/fNHUigCJpkY)
-   [L709 Tweet UI V2](https://youtu.be/es890SLMDqM)
-   [L710 Loading V2](https://youtu.be/FvmgIlJPjQ8)
-   [L713 Like Tweet Actions V1](https://youtu.be/2YTZZJTs4aw)
-   [L734 Like Tweet Reducer V1](https://youtu.be/bHklEREK6gw)
-   [L710 Tweet State V1](https://youtu.be/Q6sAKQaQTJ8)
-   [L735 Like Tweet Component V1](https://youtu.be/hPvYle9FdBk)
-   [L712 New Tweet UI V2](https://youtu.be/aEAUnJhyqCw)
-   [L715 New Tweet Logic Actions V1](https://youtu.be/MyjJlyv2H0I)
-   [L736 New Tweet Logic Reducer V1](https://youtu.be/YdmgH1-U5jM)
-   [L737 New Tweet Logic Component V1](https://youtu.be/hWGIn12dGOM)
-   [L714 Tweet Page V2](https://youtu.be/4g9l8T2MLt4)
-   [L715 React Router V2](https://youtu.be/_cB8CE_Q3Yk)
-   [Would You Rather Demo 1](https://youtu.be/xfmSkLAL__Q)

### Reducers & Middleware

Q:Would these two pieces of code make the logger produce the same output in the console?

A: No. That's right! The middleware is called in the order it is listed in this function. The thunk action creators we're using to load initial date, save tweets, and toggle tweets are functions. So if they go to the logger middleware before going to the thunk middleware (which takes the functions and executes them, thereby obtaining actions to pass to the reducers), we're going to be logging function, not the actual actions.

### Initializing the App's Data

Q: Think about this for a moment - Will our app work as desired if we dispatch the handleInitialData() action creator inside of the Dashboard Component?

A: No. It is true that the root route will load correctly, but if we go to a different route -- tweets/:id, for example -- our store will still be empty and the tweet will not be found.

### New Tweet Component

Q: Given this array, const nums = [1,2,3]; Which statements produce the following output [3,3,3] ? Select all that apply.

A: - nums.map(num => nums.length); -> Yes - nums.map(num => { return nums.length }); -> Yes - nums.map(num => { nums.length }); -> No

Q: When will the mapStateToProps function be called? Select all that apply.

A: Anytime the store is updated, and whenever the component receives new props. mapStateToProps is called whenever the store is updated

# React Native

## React vs React Native

[Github repo](https://github.com/udacity/reactnd-UdaciFitness-complete)

-   [ND019 C3 L2-09 - View e texto](https://youtu.be/_Qv4NGKNuug)
-   [ND019 C3 L2-10 - Passo a passo do aplicativo](https://youtu.be/HZSi_XB3drA)
-   [ND019 C3 L2-12 - Renderizando ícones](https://youtu.be/tYb0-l81x4U)
-   [ND019 C3 L2-13 - AddEntry-GetMetricMetaInfo Parte 1](https://youtu.be/sH4D8b7MotQ)
-   [ND019 C3 L2-13 - AddEntry-GetMetricMetaInfo Parte 2](https://youtu.be/WtAiZNpKpkM)
-   [ND019 C3 L2-14 - AddEntry-Methods](https://youtu.be/DrUMM2IzL9Q)
-   [ND019 C3 L2-15 - AddEntry-Render](https://youtu.be/xLh5C-hCuSE)
-   [ND019 C3 L2-16 - AddEntry-DateHeader](https://youtu.be/s0X1NrNNVQM)
-   [ND019 C3 L2-18 - Lidando com toques](https://youtu.be/u2-Efn5K6eM)
-   [ND019 C3 L2-19 - AddEntry-SubmitBtn](https://youtu.be/7OzFooD9EoM)
-   [ND019 C3 L2-21 - Slider](https://youtu.be/eLrjkwYIB0g)
-   [ND019 C3 L2-22 - AddEntry-UdaciSlider](https://youtu.be/Mg8vSOPiQ7M)
-   [ND019 C3 L2-23 - AddEntry-UdaciSteppers](https://youtu.be/cb3vt0Gpbjc)
-   [ND019 C3 L2-24 - AddEntry-TextButton](https://youtu.be/b-AXsdbqZyU)
-   [ND019 C3 L2-27 - ScrollView e FlatList](https://youtu.be/6JgdIxDn8H4)
-   [ND019 C3 L2-30 - Componentes de formulário](https://youtu.be/WxdnpxrWZkI)
-   [ND019 C3 L2-32 - Imagem](https://youtu.be/uxbqKJchzKQ)
-   [ND019 C3 L2 38 Armazenamento local com o React Native](https://youtu.be/uO2dR3LPOs0)
-   [ND019 C3 L2-41 - Api](https://youtu.be/243xzJEz7xo)
-   [ND019 C3 L2-45 - Actions](https://youtu.be/6g5KPHce0pQ)
-   [ND019 C3 L2-48 - Reducers](https://youtu.be/AexQfrHWGd8)
-   [ND019 C3 L2-52 - CreateStore](https://youtu.be/caJ0yapbikQ)
-   [ND019 C3 L2-55 - Connect-AddEntry](https://youtu.be/xLqJJJuyAE4)

### Common React Native Components

Q: What is true about handling touches in React Native apps? Select all that apply:

A: Both Buttons and Touchables allow us to handle some tapping gestures in our apps. Buttons render nicely out-of-the-box, but feel free to incorporate components such as TouchableHighlight or TouchableOpacity to provide more nuanced feedback for your users.

-   Both buttons and touchables have access to an `onPress` prop
-   Touchables can be nested within Views, and Views can be nested within Touchables

Q: Match each list type with their role:

A:

-   ScrollView -> renders all child components at once
-   FlatList -> renders only items visible on screen
-   SectionList -> renders on-screen items, but with headers

Q: What is true about `KeyboardAvoidingView`? Select all that apply:

A: KeyboardAvoidingView solves the problem of views that would otherwise block the way of a virtual keyboard.

-   Without it, the keyboard will pop up, hiding text inputs
-   It can wrap around `TextInput` components
-   Padding can be adjusted via a prop on it.

## Styling & Layout

-   [ND019 C3 L3-05 - 样式进程](https://youtu.be/VpZC-LrZwW4)
-   [ND019 C3 L3-17 - Style-Metainfo](https://youtu.be/6ZgAFY6Lakg)
-   [ND019 C3 L3-19 - Platform-Specific Styling](https://youtu.be/KtATaKs7qjQ)
-   [ND019 C3 L3-20 - Style-AddEntry](https://youtu.be/vBIDOsEkUK8)
-   [Style-UdaciSteppers](https://youtu.be/pW-iEnKf7Og)
-   [Style-Rest](https://youtu.be/nm8mq8__U8Q)
-   [ND019 C3 L3-25 - History](https://youtu.be/4edBztoh2rk)
-   [History-Calendar](https://youtu.be/6qWrHcBJF3c)
-   [History-Methods](https://youtu.be/t53XoUg4Dr4)
-   [History-MetricCard](https://youtu.be/z8IKGR5pmGM)
-   [History-AppLoading](https://youtu.be/0MY2yNuMiBg)
-   [ND019 C3 L3-35 - 样式化组件预览](https://youtu.be/XF_4MPpvRqs)

### CSS in JS

Q: What is true about styling in React Native?

A:

-   All of the core components accept a `style` property
-   The `StyleSheet` API allows us to define multiple styles in a single place
-   With React Native, applications are styled using JavaScript

### Flexbox Guide

Q: Consider the following CSS:

```css
.container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    /* etc. */
}
```

How should we expect items nested in this parent container to render? Please check all that apply.

A:

-   Items are placed left-to-right
-   Items are packed on the right side of the container
-   Items are packed at the top of the container

### Layout in React Native

Q: How does React Native's implementation of CSS flexbox differ from that on the web? Select all that apply:

A: While lots of the same philosophies of flexbox apply to both web and React Native apps, there are some distinct differences with how React Native implements flexbox.

-   Containers are flex containers by default in React Native (i.e., setting `display: flex` is not necessary)
-   In React Native, CSS properties are written in camelCase
-   Dimensions in React Native are unitless

## Navigation

-   [ND019 C3 L4-02 - TabNavigatorIntroduction](https://youtu.be/SfdRg-bMfLc)
-   [ND019 C3 L4-04 - TabNavigator](https://youtu.be/4Ki4UbOy8II)
-   [ND019 C3 L4-07 - StatusBar](https://youtu.be/LzLIqKtjpD8)
-   [ND019 C3 L4-09 - StackNavigator Introduction](https://youtu.be/uMbBR5nu3eg)
-   [ND019 C3 L4-11 - StackNavigator](https://youtu.be/PkoZ__6NPE8)
-   [ND019 C3 L4-13 - NavigationOptions](https://youtu.be/JosvkjGlt30)
-   [ND019 C3 L4-14 - Connect-EntryDetail](https://youtu.be/-c5FZCh5LNo)
-   [ND019 C3 L4-15 - EntryDetail-Reset](https://youtu.be/Hv_EbcrmbDY)
-   [ND019 C3 L4-16 - Finish-Navigation](https://youtu.be/_nRJsJ2-zgY)
-   [ND019 C3 L4-18 - DrawerNavigator Introduction](https://youtu.be/rxb47NRwix8)

### Tab Navigator

Q: What is true about the Tab Navigator? Please select all that apply:

A: The Tab Navigator is just one of React Navigation's three basic customizable navigators.

### Stack Navigator

Q: What is true about the Stack Navigator? Please select all that apply:

A: The Stack Navigator keeps things simple, but is incredibly powerful. We simply define all screens within an object, pass it into createStackNavigator, and it returns a component we can render!

-   Similar to the Tab Navigator, the Stack Navigator can also leverage `navigationOptions`
-   Stack Navigator animations render differently in Android and iOS

### Drawer Navigator

Q: What is true about the Drawer Navigator? Please select all that apply:

A: Many native applications include a drawer menu to help users navigate through the app. The Drawer Navigator offers us a simple but powerful way to implement that in React Native apps!

-   The component returned by `createStackNavigator` can be nested inside a Drawer Navigator.
-   Drawer Navigator's drawer generally spans the height of the screen

Q: Please match the navigator with how it manages screens:

A:

-   Screens are rendered and placed on top of one another -> Stack Navigator
-   Screens are switched by using a tab bar -> Tab
-   Screens are switched by a menu that slides in from the side -> Drawer

## Native Features

-   [ND019 C3 L5 02 - Live 组件](https://youtu.be/94Bb8stLHrU)
-   [ND019 C3 L5-06 - Live-Undetermined](https://youtu.be/nIQMG9N33IE)
-   [ND019 C3 L5-07 - Live-Denied](https://youtu.be/B56Uz-NKKhs)
-   [ND019 C3 L5-08 - Live-Granted](https://youtu.be/oiz4Fn1Iqqk)
-   [ND019 C3 L5-09 - Live-SetLocation](https://youtu.be/BNYvgnCvPFc)
-   [ND019 C3 L5-10 - Live-AskPermission](https://youtu.be/tl8blRR_nc0)
-   [ND019 C3 L5 13 Introduction To Animated](https://youtu.be/lyM8LcmrdS8)
-   [ND019 C3 L5-15 - Animated](https://youtu.be/H1LJ3C8yzuc)
-   [ND019 C3 L5-21 - SetLocalNotification](https://youtu.be/Qp7OpUgkhsQ)
-   [ND019 C3 L5-22 - UseLocalNotification](https://youtu.be/sGdXitMsRTE)
-   [ND019 C3 L5-27 - Photos Fun](https://youtu.be/fAqI8iGAgiQ)
-   [ND019 C3 L5-32 - App-Prep](https://youtu.be/4rcPX-bIneE)
-   [ND019 C3 L5-35 - Generating .Apk And .Ipa Files](https://youtu.be/IryVgEQ0SvE)

### Geolocation

Q: Which of the following methods would you use to subscribe to the user's location using Expo? Select all that apply.

A: To subscribe to a user's location, you use Expo's `Location.watchPositionAsync` method passing it two arguments: an options object, and a callback to be called whenever the location changes.

### Animations

Q: Animated comes with three built in animation configurations. Please select all that apply:

A: Animated provides three types of animation configurations: `timing`, `spring`, and `decay`.

### Local Notifications

Q: What's the API for scheduling future local notifications with Expo?

A: To schedule a local notification to be shown in the future you use Expo's `Notifications.scheduleLocalNotificationAsync` method.

### Handling Photos

Q: What's the method for launching the UI for the device's image gallery?

A: To show the UI for the device's image gallery, use the `ImagePicker.launchImageLibraryAsync` method.

### App Store Preparation

Q: Which file do you need to change in order to configure your application for the app store?

A: When you create an app with create-react-native-app you'll automatically have an `app.json` file created for you, which will contain all of the configuration settings for your app.

## Mobile Flashcards Project

-   [Mobile-Flashcards-Demo](https://youtu.be/_72MNWWaJuE)

# Readable Project

[Github repo](https://github.com/udacity/reactnd-project-readable-starter)
