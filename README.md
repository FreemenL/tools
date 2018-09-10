git 命令

* 初始化	git init
* 添加至暂存区	git add file
* 添加至版本库	git commit -m "..."
* 查询状态	git status
* 查询提交历史	git log
* 简化查询历史	git log --pretty=oneline
* 退回上个版本	git reset --hard HEAD^
* 退回至某个版本git reset --hard commit_id
* 查询操作日志	git reflog
* 撤销工作区修改git checkout -- file  #“--”很重要
* 撤销提交暂存区git reset HEAD file
* 删除文件	git rm file
* 生成ssh	ssh-keygen -t rsa -C "user mail"
* 关联远程库	git remote add origin git@github.com:michaelliao/learngit.git
* 首次推送远程库   git push -u origin master
* 推送远程库       git push origin master
* 克隆远程库       git clone git@github.com:michaelliao/gitskills.git
* 创建切换分支     git checkout -b <name>
* 创建分支         git branch <name>
* 切换分支         git checkout <name>
* 查看分支         git branch
* 合并分支         git merge <name>
* 删除分支         git branch -d <name>
* 合并分支/不快速  git merge --no-ff -m "merge with no-ff" <name>
* 存档             git stash
* 查询存档         git stash list
* 恢复存档并删除   git stash pop
* 恢复存档         git stash apply
* 删除存档         git stash drop
* 恢复至某存档     git stash apply stash@{0}
* 强制删除分支     git branch -D <name>   #强制删除
* 创建远程分支     git checkout -b <name1> <repo>/<name2>
* 创建标签         git tag <tag_name>
* 列出标签         git tag            #按字母列出
* 创建某id的标签   git tag <tag_name> <commit_id>
* 查看标签信息     git show <tag_name>
* 指定标签信息     git tag -a <tagname> -m "message"
* 私钥签名         git tag -s <tagname> -m "test" <commit> #需要GnuPG配置key
* 删除本地标签     git -d tag <tag_name>
* 推送远程标签     git push <repo> <tag_name>
* 推送本地全部标签 git push <remote_repo> --tags
* 删除远程标签     git push <remote_repo> :refs/tags/<tag_name>
* 检查忽略规则     git check-ignore
* 忽略名单         .gitignore
* 配置别名         git config --global alias.<简化命令> <命令>

