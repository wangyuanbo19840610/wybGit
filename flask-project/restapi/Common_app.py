from flask import Flask


class CommonApp(object):
    def __new__(cls, **kwargs):
        cls.app=Flask(__name__)
        cls.blue_print = kwargs.get('blue_prints', [])
        for api_bp in cls.blue_print:
            cls.app.register_blueprint(api_bp)
        return cls.app
