// action = {
//     type: 'CREATE_EVENT',
//     title: '2020東京オリンピックのお知らせ',
//     body: '2021年に東京オリンピックが開催されます。つきましては・・・'
// }

// 【場合分け】
// ・登録済みのイベントがない場合
// #before
// state = []
// ↓
// #after
//state = [
//   { id : 1,
//     title: '2020東京オリンピックのお知らせ',
//     body: '2021年に東京オリンピックが開催されます。つきましては・・・'
//   }
// ]
//
// ・登録済みのイベントが存在している場合
// #before
// state = [
//     { id:1, title:'タイトル1', body: 'ボディー1' }
//     { id:2, title:'タイトル2', body: 'ボディー2' }
//     { id:3, title:'タイトル3', body: 'ボディー3' }
// ]
// ↓
// #after
// state = [
//     { id:1, title:'タイトル1', body: 'ボディー1' }
//     { id:2, title:'タイトル2', body: 'ボディー2' }
//     { id:3, title:'タイトル3', body: 'ボディー3' }
//     { id : 4,
//     title: '2020東京オリンピックのお知らせ',
//     body: '2021年に東京オリンピックが開催されます。つきましては・・・'
//     }
// ]
//

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      // 登録済みのイベント数
      const length = state.length;
      // 新規登録するイベントオブジェクトにIDを付与する
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      // 状態遷移後の配列を返却
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
      // actionで渡されたidのオブジェクトを配列から削除する
      return state.filter(e => e.id !== action.id);
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
