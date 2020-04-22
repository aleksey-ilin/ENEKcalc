from urllib.parse import urlparse, parse_qs
from iapws import IAPWS97
from json import JSONEncoder


class Encoder(JSONEncoder):
    def default(self, o):
        return o.__dict__


def app(environ, start_response):
    parsed_url = urlparse(environ['RAW_URI'])
    query = parse_qs(parsed_url.query)
    func1 = list(query)[0]
    args1 = list(query[func1])
    func2 = list(query)[1]
    args2 = list(query[func2])
    sat_steam = IAPWS97(P=0.10142, T=200 + 273.15)

    result = Encoder().encode(sat_steam)
    status = '200 OK'
    response_headers = [
        ('Content-type', 'application/json;charset=utf-8'),
        ('Access-Control-Allow-Origin', '*'),
        ('Content-Length', str(len(str(result))))
    ]
    response_body = result.encode()
    start_response(status, response_headers)
    return iter([response_body])
