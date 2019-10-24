from flask_restful import Resource
from util.util import Redis
from interface.base_info import BaseInfo


class HelloWorld(Resource):
    def get(self):
        info = BaseInfo.get_info()
        return info


class Test20191018(Resource):
    def get(self):
        info = BaseInfo(name="Terry")
        data = info.get_base_info()
        return data


class TestRedisWrite(Resource):
    """
    测试redis
    """
    def get(self):
        Redis.write("test_key2222", "test_value")
        return "ok2222"


class TestRedisRead(Resource):
    def get(self):
        Redis.write("test_key11111", "test_value_1019")
        return "ok1111"


class TestRedisReadOne(Resource):
    def get(self):
        data = Redis.read("test_key3333")
        return data




