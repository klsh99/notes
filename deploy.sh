#!/bin/bash

cd /home/echoxu/Programe/vuepress
echo "------------------------- 正在提交 vuepress 源码到 Git ------------------------------------"
git add .
git commit -m "commit at: $(date "+%Y-%m-%d %H:%M:%S")"
git push -u src master
echo "------------------------- 已将 vuepress 源码提交到 Git ------------------------------------"

yarn docs:build
cd /home/echoxu/Programe/vuepress/docs/.vuepress/dist
git init
git remote add origin git@192.168.1.20:/home/git/blogdata/blog.git
git add .
git commit -m "commit at: $(date "+%Y-%m-%d %H:%M:%S")"
git push -f origin master

echo "------------------------- 已将 vuepress 编译后的文件提交到 Git ------------------------------------"

