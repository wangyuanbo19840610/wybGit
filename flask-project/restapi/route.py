from flask import Blueprint
from flask_restful import Api
from restapi.service.test import HelloWorld, Test20191018, TestRedisWrite, TestRedisRead, TestRedisReadOne

api_bp = Blueprint("request", __name__)
api = Api(api_bp)

api.add_resource(HelloWorld, "/api/test001")
api.add_resource(Test20191018, "/api/test002")
api.add_resource(TestRedisWrite, "/api/test003")
api.add_resource(TestRedisRead, "/api/test004")
api.add_resource(TestRedisReadOne, "/api/test005")

