from urllib.parse import urlparse, parse_qs
from pyXSteam.XSteam import XSteam


def app(environ, start_response):
    print(environ)
    parsed_url = urlparse(environ['RAW_URI'])
    query = parse_qs(parsed_url.query)
    func = list(query)[0]
    args = list(query[func])
    steamTable = XSteam(XSteam.UNIT_SYSTEM_MKS)
    getResult = getattr(steamTable, func)

    if len(args) == 1:
        result = getResult(int(args[0]))
    elif len(args) == 2:
        result = getResult(int(args[0]), int(args[1]))

    data = bytes("result = {}".format(result), "utf-8")
    status = '200 OK'
    response_headers = [
        ('Content-type', 'text/plain'),
        ('Content-Length', str(len(data)))
    ]
    start_response(status, response_headers)
    return iter([data])
