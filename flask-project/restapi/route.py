from flask import Blueprint
from flask_restful import Api
from restapi.service.test import HelloWorld, Test20191018

api_bp = Blueprint("request", __name__)
api = Api(api_bp)

api.add_resource(HelloWorld, "/test")
api.add_resource(Test20191018, "/test01")

