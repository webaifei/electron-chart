### 主要功能
1. 两个页面的PV UV
2. 会员
> 新增用户数-> 付费会员数 区分等级
> 邀请办卡
3. 办卡
> 注册用户数 -> 申请卡
4. 事件点击

几个数据指标
1. 代理推广积极性
```
--分享
  --微信分享
  --海报
  --复制链接

--会员升级情况
  --普通会员
  --白金会员
  --钻石会员
```
2. 办卡用户
```
--新增用户（讲道理应该是实习会员）
--申卡
-- 当日合卡
```

### 注意事项
1. 安装electron 慢的解决方案
```
// 切换npm源为淘宝
registry=https://registry.npm.taobao.org/
//在.npmrc中添加下面的代码 
ELECTRON_MIRROR=http://npm.taobao.org/mirrors/electron/
## install 
```bash
$ cd your-project-name
$ yarn
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to the [Multi Platform Build docs](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package --[option]
```

:bulb: You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## CSS Modules

This boilerplate is configured to use [css-modules](https://github.com/css-modules/css-modules) out of the box.

All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

If you want to import global css libraries (like `bootstrap`), you can just write the following code in `.global.css`:

```css
@import '~bootstrap/dist/css/bootstrap.css';
```

## SASS support

If you want to use Sass in your app, you only need to import `.sass` files instead of `.css` once:

```js
import './app.global.scss';
```

