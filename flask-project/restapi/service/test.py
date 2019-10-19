from flask_restful import Resource
from util.util import Redis


class HelloWorld(Resource):
    def get(self):
        return "HelloWorld"


class Test20191018(Resource):
    def get(self):
        return "Test20191018"


class TestRedisWrite(Resource):
    """
    测试redis
    """
    def get(self):
        Redis.write("test_key", "test_value", 60)
        return "ok"


class TestRedisRead(Resource):
    def get(self):
        data = Redis.read("test_key")
        return data




