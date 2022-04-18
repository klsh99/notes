---
title: Tab 栏使用案例
permalink: /Inbox/how-to-use-vuepress/tab
---

> 在 vuepress 中使用 tab 栏

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash:no-line-numbers
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash:no-line-numbers
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>

<CodeGroup>
  <CodeGroupItem title="tab 1" active>

```go{7-9}
package main

import (
	"fmt"
)

func main() {
  fmt.println("hello world")
}

```

  </CodeGroupItem>

  <CodeGroupItem title="tab 2">

```bash 
这里是测试 tab 2 的内容
```

  </CodeGroupItem>
</CodeGroup>
