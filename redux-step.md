https://chentsulin.github.io/redux/index.html

#1.定義 action 
Actions 是從你的應用程式傳遞資料到你的 store 的資訊 payload。它們是 store 唯一的資訊來源。你藉由 store.dispatch() 來把它們傳遞到 store。
C:\WorkArea\GitHub\create-react-app\src\constants\actionTypes.js

#2.建立 Action Creator
Action creator 就是—產生 action 的 function, action 是個資訊 payload，而 action creator 是個產生 action 的 factory。
C:\WorkArea\GitHub\create-react-app\src\actions\index.js

#3.建立 Reducer (指定應用程式的 state 要如何去應對改變,同setState,會用到的function)
C:\WorkArea\GitHub\create-react-app\src\reducers

在 Redux 中，所有的應用程式 state 被儲存為一個單一物件。在撰寫任何程式碼之前先設計好 State 的形狀。
reducer 是一個 pure function，它接收先前的 state 和一個 action，然後回傳下一個 state。
(不直接寫入 state 或是他的屬性，取而代之我們回傳一個新的物件)

永遠不應該在 reducer 裡面做這些事：
    改變它的參數；
    執行有 side effect 的動作，像是呼叫 API 和 routing 轉換。
    呼叫不是 pure 的 function，像是 Date.now() 或是 Math.random()。

要做combineReducers
combineReducers() 做的就是產生一個 function，它以依照它們的 key 所選擇的 state 部分來呼叫你的 reducers，並再次把它們的結果合併成單一一個物件

#4.建立Presentational Component 和 Container Component

#5.建立進入點
5.1 createStore
5.2 看看需不需要給初始值 : store.dispatch(getAllStudents()); => 藉由 dispatch(action) 來更新 state；
5.3 render

Redux 應用程式中的資料生命週期都遵照這 4 個步驟：
    1.呼叫 store.dispatch(action)
    2.Redux store 呼叫你給它的 reducer function。
    3.root reducer 可以把多個 reducer 的 output 合併成一個單一的 state tree
    4.Redux store 儲存 root reducer 回傳的完整 state tree。

#有修正兩個warning
1. <div> cannot appear as a descendant of <p>
2. Each child in an array or iterator should have a unique "key" prop