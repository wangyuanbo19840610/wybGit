from restapi.Common_app import CommonApp
from restapi.route import api_bp

app = CommonApp(blue_prints=[api_bp])

if __name__ == '__main__':
    app.run(debug=True)
