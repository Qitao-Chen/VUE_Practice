// import Home from "@/views/Home"
// import Blog from "@/views/Blog"
// import About from "@/views/About"
// import Project from "@/views/Project"
// import Message from "@/views/Message"
// import BlogDetail from "@/views/Blog/Detail"
import NotFound from "@/views/NotFound"

import "nprogress/nprogress.css";
import {
  start,
  done,
  configure
} from "nprogress";
window.start = start;
window.done = done;
configure({
  trickleSpeed: 50,
  showSpinner: false
})
async function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  })
}

function getPageComponent(func) {
  //参数需要以函数得形式传入 见课程vue-2 40 异步组件
  return async () => {
    console.log('组件开始加载');
    start()
    if (process.env.NODE_ENV === "development") {
      //开发环境
      await delay(2000);
    }
    const comp = await func();
    console.log("组件加载完毕");
    done()
    return comp;
  }
}

export default [{
    name: "Home",
    path: "/",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "home"*/ "@/views/Home")
    ),
    meta: {
      title: "Home"
    }
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "blog"*/ "@/views/Blog")
    ),
    meta: {
      title: "Article"
    }
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "blog"*/ "@/views/Blog")
    ),
    meta: {
      title: "Blog"
    }
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "BlogDetail"*/ "@/views/Blog/Detail")
    ),
    meta: {
      title: "BlogDetail"
    }
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "About"*/ "@/views/About")
    ),
    meta: {
      title: "About"
    }
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "Project"*/ "@/views/Project")
    ),
    meta: {
      title: "Project"
    }
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import( /*webpackChunkName: "Message"*/ "@/views/Message")
    ),
    meta: {
      title: "Message"
    }
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  }
];