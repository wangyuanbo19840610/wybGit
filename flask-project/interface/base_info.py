class BaseInfo(object):

    def __init__(self, **kwargs):
        self.name = kwargs.get("name")

    @classmethod
    def get_info(cls):
        return "hello world"

    def get_base_info(self):
        data = self.name
        return data
