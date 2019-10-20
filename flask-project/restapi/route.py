from flask import Blueprint
from flask_restful import Api
from restapi.service.test import HelloWorld, Test20191018, TestRedisWrite, TestRedisRead, TestRedisReadOne

api_bp = Blueprint("request", __name__)
api = Api(api_bp)

api.add_resource(HelloWorld, "/test001")
api.add_resource(Test20191018, "/test002")
api.add_resource(TestRedisWrite, "/test003")
api.add_resource(TestRedisRead, "/test004")
api.add_resource(TestRedisReadOne, "/test005")

