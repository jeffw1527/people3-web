FROM node:18.20.0-alpine3.18

# 在容器中创建一个工作目录
WORKDIR /app

# 复制项目中的 package.json 和 package-lock.json 到容器中
COPY package*.json ./

# 安装项目的依赖
RUN npm install

# 将项目文件复制到容器中
COPY . .

# 运行构建命令
RUN npm run build

# 将Nginx容器的80端口映射到主机的80端口
EXPOSE 3000

# 启动Nginx服务
#CMD ["sh", "-c", "nginx -g 'daemon off;' && rm /etc/nginx/conf.d/default.conf"]
CMD ["npm", "run", "start"]

