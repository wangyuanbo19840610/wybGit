##redis使用
1.下载并安装Redis-x64-3.0.503.msi，地址：https://github.com/MicrosoftArchive/redis/releases
2.安装完成后，启动服务（找到安装路径，双击redis-cli.exe文件即可
3.字符串使用场景
(a) 缓存功能：典型使用场景：Redis作为缓存层，MySQL作为存储层，绝大部分请求的数据都是从Redis中获取，由于Redis具有支撑高并发的特性，所以缓存通常能起到加速读写和降低后端压力的作用。
4.redis如何和持久化数据库关联。
(a)Redis和Hbase互补取值思路:
用户取数据首先从Redis中取，Redis中没有数据则将Hbase中的数据插入Redis,且在配置文件中设置redis开关redisSwitch，如果redisSwitch=true则是从Redis中取数据，否则直接从Hbase中取数据，
在配置文件中设置Redis的域的有效时间effectiveTime=86400，86400s为24小时，若设置为0s则直接失效。
