from flask import Flask


class CommonApp(object):
    def __new__(cls, **kwargs):
        cls.app = Flask(__name__)
        """ 配置redis """
        cls.app.config['REDIS_HOST'] = "127.0.0.1"  # redis数据库地址
        cls.app.config['REDIS_PORT'] = 6379  # redis 端口号
        cls.app.config['REDIS_DB'] = 0  # 数据库名
        cls.app.config['REDIS_EXPIRE'] = 60  # redis 过期时间60秒
        cls.blue_print = kwargs.get('blue_prints', [])
        for api_bp in cls.blue_print:
            cls.app.register_blueprint(api_bp)
        return cls.app
