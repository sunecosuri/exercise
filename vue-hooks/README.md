# Vue-hooks 触ってみたお話

### そもそもVue-hooksとは
React hooks をVueで使えるようにした実験的なAPI

### React Hooks?
ReactHooksについて書く

Stateful なコンポーネントを書くには Class Component を使わなければならなかった React が、 Class を放棄するために State を Functional Component でも扱えるようにしたもの

### evanyou さんのTwitterのスクショ貼る
https://twitter.com/youyuxi/status/1057151823201648640

### mixinAPI？

#### いわゆるコンポーネントに共通機能を追加する仕組み

methods に共通関数の追加
lifecycle hook における処理の共通化
created などのライフサイクルフックに共通処理追加  
 - ライフサイクルメソッドの実行順はミックスイン→コンポーネント順に呼ばれる
 - namespaceが競合した際はコンポーネント側が優先的に実行される（振る舞い的には上書きではなくMerge）
コンポーネントにオプションのような形で混ぜ込まれる

そのため、暗黙的な挙動になりやすくバグを生みだしやすい箇所になりやすい
詳しくは mya-akeさんとかのpluginの記事や公式などに書いてあります。

### vue Hooksのコードを実際見てみる

useState | ローカルな状態を定義(instance.$data._stateをinstance.$setで実装)
-- | --
useEffect | ライフサイクルイベントを実現
useRef |  instance.$refs をreturn
useData | localStateを定義 Vueのdata相当 instance.$set() で実装
useMounted | useEffectを派生させてmounted()を実装
useDestroyed | useEffectを派生させてdestroyed()を実装
useUpdated | useEffectを派生させてupdated()を実装
useWatch | instance.$watch を内部で実行
useComputed | computed
withHooks | 


useData = localState を定義（Vue.$data にあたるもの）




### まとめ
Vue3.0系ではVue hooksAPIが前向きに検討しているらしい
内部のソースを読んでみるとより理解が深まるかも…？
まだ今後に期待




