from flask_restful import Resource


class HelloWorld(Resource):
    def get(self):
        return "HelloWorld"


class Test20191018(Resource):
    def get(self):
        return "Test20191018"
